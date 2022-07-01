import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import messaging from '@react-native-firebase/messaging';
import moment from 'moment-timezone';
import { AppState, DeviceEventEmitter, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import fetch from 'react-native-fetch-polyfill';
import RNFetchBlob from 'rn-fetch-blob';
import Config from './Config';

require('moment/locale/vi');
require('moment/locale/en-au');

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
}

String.prototype.isUnicode = function () {
    for (var i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) >= 192) {
            return true;
        }
    }
    return false;
}

// parse unicode string to un-unicode string
String.prototype.unUnicode = function () {
    var result = this.toLowerCase();
    result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    result = result.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    result = result.replace(/đ/g, "d");
    return result;
}

// match un-unicode lookup string in unicode full string
String.prototype.unUnicodeMatch = function (lookupString) {
    var fullString = this.unUnicode();
    lookupString = lookupString.unUnicode();
    return fullString.indexOf(lookupString) >= 0;
}

String.prototype.splice = function (startIndex, delCount, newSubStr) {
    return this.slice(0, startIndex) + newSubStr + this.slice(startIndex + Math.abs(delCount));
}

var Global = {
    locale: 'vn_vn',
    // locale: 'en_us',
    deviceId: '',
    appName: Config.appName,
    appVersion: Platform.OS == 'ios' ? Config.appVersion.ios : Config.appVersion.android,
    serverUrl: '',
    token: '',
    userLogin: '',
    user: {},
    counters: {},
    userSettings: {},
    studentSelected: {},
    studentList: [],
    countNotification: 0,
    enumList: [],
    debug: true,
    isOnline: true,
    navigationRef: null,
    gpsLocation: {},
    backgroundTasks: [],
    launchApp: function () {
        this.initNotifications();
        this.runBackgroundTasks();
    },
    runBackgroundTasks: function () {

        // const checkNetworkTask = setInterval(() => {
        //     // Run background task only if user is logged in and network is connected
        //     if (this.user.id && AppState.currentState != 'background') {
        //         this.checkNetworkStatus();
        //     }
        // }, 15000);

        // this.backgroundTasks.push(checkNetworkTask);

        const updateCountersTask = setInterval(() => {
            // Run background task only if user is logged in and network is connected
            if (this.user?.id && AppState.currentState != 'background' && this.isOnline) {
                console.log('Update counters triggered');
                this.updateCounters((data) => {});
            }
        }, 1 * 60000);

        this.backgroundTasks.push(updateCountersTask);
    },
    initNotifications: function () {
        requestUserPermission()
            .then((enabled) => {
                if (enabled) {
                    console.log('Authorization status:', enabled);
                }
            });

        messaging().registerDeviceForRemoteMessages();

        messaging().getToken().then((token) => {
            console.warn('Device token:', token);
            Global.saveDeviceId(token);
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );

            Global.handleNotification(remoteMessage, 0, undefined);
        });

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                    Global.handleNotification(remoteMessage, 0, undefined);
                }
            });

    },
    handleNotification: function (notification, isRead, callback) {
        var notify = notification;
        if (notify?.data?.id) {

            Global.navigationRef?.navigate('NotificationScene');

            // Set is read for notification clicked
            if (isRead == 0) {
                var params = {
                    action: 'MarkNotificationAsRead',
                    data: {
                        id: notify.data.id
                    }
                };

                // Call api
                this.callAPI(null, params, data => {
                    if (parseInt(data.success) === 1) {
                        // Update counter notifications
                        this.updateCounters();

                        // Reset badge counter
                        setTimeout(() => {
                            notifee.setBadgeCount(parseInt(this.counters?.all || 0)).then(() => console.log('Badge count set!'));
                        }, 2000);

                        callback?.(true);
                    }
                    else {
                        callback?.(false);
                    }
                },
                    error => {
                        callback?.(false);
                    });
            }
        }
        else {
            Global.navigationRef?.navigate('NotificationScene');
        }
    },
    saveDeviceId: function (token) {
        // Store device id on Global
        this.deviceId = token;

        var params = {
            action: 'AddDeviceId',
            data: {
                device_id: token
            }
        };

        // Call api
        this.callAPI(null, params, data => {
            console.log('Response save deviceId: ', data);
            if (data.error == 1) {
                return;
            }
        }, error => {
        });
    },
    init: function (callback) {
        // Genral userAgent from device
        this.userAgent = `Manufacture: ${DeviceInfo.getManufacturerSync()} \nModel: ${DeviceInfo.getModel()} \nDevice name: ${DeviceInfo.getDeviceNameSync()} \nOS version: ${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()} \nApp version: ${Config.appName} ${Platform.OS == 'ios' ? Config.appVersion.ios : Config.appVersion.android}`;
        
        // Init network info
        NetInfo.addEventListener((state) => {
            this.connectionType = state.type;
            if (this.connectionType == undefined || this.connectionType.toUpperCase() == 'NONE') {
                Global.updateNetworkStatus(false);
            }
        });

        // Retrieve local config if any
        AsyncStorage.getItem('serverUrl', (err, result) => {
            if (err) {
                console.log('Getting local Server URL error', err);
                return;
            }

            var url = result;

            if (url) {
                this.serverUrl = url;
            }
            callback();
        });

        this.setDebugMode(this.debug);
    },
    updateNetworkStatus(isOnline) {
        var oldStatus = this.isOnline;
        var newStatus = isOnline;

        if (oldStatus != newStatus) {
            // Emit signal when the status is changed
            DeviceEventEmitter.emit('NetworkStatusChanged', { isOnline: newStatus });

            // Update new status into Global
            // this.isOnline = newStatus;
            this.isOnline = true;
        }
    },
    setDebugMode: function (debug) {
        // Control log debug on app
        if (!debug) {
            console.log('enable log debug', debug);

            ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group',
                'groupCollapsed', 'groupEnd', 'info', 'log', 'profile', 'profileEnd', 'table', 'time',
                'timeEnd', 'timeStamp', 'trace', 'warn']
                .forEach(methodName => {
                    console[methodName] = () => { };
                });
        }
    },
    parseHtmlToString: function (html, str) {
        return html.replace(/<[^>]*>?/gm, str || '');
    },
    formatNumber: function (number) {
        if (number == null) {
            return 0;
        }
        else {
            number = parseFloat(number).toFixed(Global.user?.no_of_currency_decimals || 0)
        }

        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    formatNumberForm: function (number) {
        if (number == null) {
            return 0;
        }
        else {
            number = parseFloat(number).toFixed(0)
        }

        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    formatIntegerNumber: function (number) {
        if (number == null) {
            return 0;
        }
        else {
            number = parseInt(number);
        }

        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },

    // Format date allow user format
    formatDate: function (date) {
        if (date) {
            return moment(date).format('DD-MM-YYYY');
        }
        else {
            return '';
        }
    },
    
    // Format date time allow user format
    formatDateTime: function (date) {
        if (date) {
            return moment(date).format(`${'DD-MM-YYYY'} HH:mm:ss`);
        }
        else {
            return '';
        }
    },
    // Format time allow user format
    formatTime: function (date) {
        if (date) {
            return moment(date).format(`HH:mm`);
        }
        else {
            return '';
        }
    },
    setCounters: function (counters) {
        this.counters = counters;
        notifee.setBadgeCount(parseInt(counters?.all || 0)).then(() => console.log('Badge count set!'));

        if (parseInt(counters?.all || 0) > 0) {

            DeviceEventEmitter.emit('Application.markUnreadNotification');
        }
    },
    saveCacheUserInfo: function () {
        var userInfo = {
            user: Global.user,
            counters: Global.counters,
            enumList: Global.enumList,
            studentList: Global.studentList,
            studentSelected: Global.studentSelected,
            userSettings: Global.userSettings
        };
        let value = JSON.stringify(userInfo);
        AsyncStorage.setItem('cache_user_info', value, () => {
            console.log('Cache user info saved');
        });
    },
    changeStudent: function (student) {
        this.studentSelected = student;
        Global.saveCacheUserInfo();
    },
    setUser(user) {
        user['name'] = ((user.first_name || '') + ' ' + (user.last_name || '')).trim();
        if (typeof user?.avatar == 'object') {
            if (user?.avatar?.link?.search('http') == -1) {
                user.avatar.link = this.getImageUrl(user.avatar.link);
            }
        }
        else {
            if (user?.avatar?.search('http') == -1) {
                user.avatar = this.getImageUrl(user.avatar);
            }
        }

        this.user = user;
        // this.locale = user.language;
        // moment.locale(user.language == 'vn_vn' ? 'vi' : 'en-au'); // Update langue for moment
    },
    stopBackgroundTasks: function () {
        for (task of this.backgroundTasks) {
            clearInterval(task);
        }

        this.backgroundTasks = [];
    },
    // Util functions
    getImageUrl: function (imageUrl) {
        if (imageUrl == '' || !imageUrl) {
            imageUrl = 'resources/images/no_ava.png';
        }
        return this.getServiceUrl('serverUrl') + '/' + imageUrl;
    },
    exitApp: function () {
        AsyncStorage.removeItem('token', (err) => {
            console.log('Token cleared');
        });
        Global.deviceId = null;
        Global.cacheNotifications = null;
        Global.countNotification = null;
        Global.checkedUpdates = true;
        AsyncStorage.removeItem('cache_user_info', (err) => {
            console.log('User info cleared');
        });
        AsyncStorage.removeItem('cache_notifications', (err) => {
            console.log('Cache notifications data cleared');
        });
        AsyncStorage.removeItem('cache_count_notifications', (err) => {
            console.log('Cache count notifications data cleared');
        });
        // Stop background tasks
        this.stopBackgroundTasks();

        DeviceEventEmitter.emit('Authenticate.SignOut');

        this.deviceId = '';
        // Reset badge icon
        notifee.setBadgeCount(0).then(() => console.log('Badge count set!'));
    },
    callAPI: function (context, params, successCallback, errorCallback) {
        var serviceUrl = this.getServiceUrl('serverUrl') + Config.apiUrl;
        console.log('Server URL: ', serviceUrl);
        console.log('HTTP request ' + params.action + ': ', JSON.stringify(params));
        var headers = {
            'Token': this.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        var body = JSON.stringify(params);
        // Use multipart/form-data to upload file
        if (params['IsMultiPartData'] == 1) {
            headers['Content-Type'] = 'multipart/form-data';
            let formData = new FormData();
            for (var field in params) {
                var value = params[field];
                if (typeof value == 'object') {
                    // File type
                    if (value['uri'] != null) {
                        formData.append(field, value);
                    }
                    // Json type
                    else {
                        formData.append(field, JSON.stringify(value));
                    }
                }
                // Text type
                else {
                    formData.append(field, value);
                }
            }
            body = formData;
            console.log('Body: ', JSON.stringify(body));
        }

        fetch(serviceUrl, {
            method: 'POST',
            headers: headers,
            body: body,
            timeout: 40 * 1000
        })
            .then((response) => {
                console.log('HTTP response ' + params.RequestAction + ': ', response.status, response._bodyText);
                if (context != null) {
                    context?.setState({
                        loading: false
                    });
                    context?.setState({
                        refreshing: false
                    });
                    // Redirect user to the login page if session is timed out
                    if (response.status == 401 && params.RequestAction != 'Login') {
                        console.log('EXIT APP');
                        this.exitApp();
                    }
                }
                else {
                    if (response.status == 401 && params.RequestAction != 'Login') {
                        console.log('EXIT APP');
                        DeviceEventEmitter.emit('Authenticate.SignOut');
                        this.exitApp();
                    }
                }
                return response;
            })
            .then((response) => {
                console.log('LOG. response data: ', response);
                return response.json()
            })
            .then((data) => successCallback(data))
            .catch(function (error) {
                if (context != null) {
                    context.setState({
                        loading: false
                    });
                    context.setState({
                        refreshing: false
                    });
                }
                console.log('============= Fetch Error =============');
                console.log(error);
                console.log('============= End Fetch Error =============');
                errorCallback(error);
            });
    },
    // Util function to get service url based on the given key
    getServiceUrl: function (key) {
        // If server url is set by local admin, use this url
        if (key == 'serverUrl' && this.serverUrl) {
            return this.serverUrl;
        }
        // Other wise, use global config
        var appMode = Config.appMode;
        if (Config[appMode] == null) {
            return '';
        }
        var serviceUrl = Config[appMode][key];
        if (serviceUrl == null) {
            serviceUrl = '';
        }
        if (key == 'serverUrl') {
            return serviceUrl;
        }
        return serviceUrl;
    },
    callAPIWithFile: function (params, successCallback, errorCallback) {
        var serviceUrl = this.getServiceUrl('serverUrl') + Config.apiUrl;
        console.log('HTTP server url: ', serviceUrl)
        console.log('HTTP request ' + params.RequestAction + ': ', JSON.stringify(params));
        var headers = {
            'Token': this.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Client': 'Mobile'
        };
        let formData = [];
        for (var field in params) {
            var value = params[field];
            const item = {};
            if (typeof value == 'object') {
                // File type
                if (value['uri'] != null) {
                    item.name = field,
                        item.filename = value['name'];
                    item.type = value['type'];
                    item.data = RNFetchBlob.wrap(value['uri'].replace("file://", ""))
                }
                // Json type
                else {
                    item.name = field;
                    item.data = JSON.stringify(value);
                }
            }
            // Text type
            else {
                item.name = field;
                item.data = value;
            }
            formData.push(item)
        }
        body = formData;
        console.log('Body: ', JSON.stringify(body));
        RNFetchBlob.fetch(
            'POST',
            serviceUrl,
            headers,
            body
        )
            .then((response) => {
                if (response?.respInfo?.status == 401) {
                    DeviceEventEmitter.emit('Authenticate.SignOut')
                    return;
                }
                console.log('HTTP response ' + JSON.stringify(response));
                return response;
            })
            .then((response) => {
                if (response?.respInfo?.status === 200) {
                    return response.json();
                } else if (response?.respInfo?.status === 500) {
                    const res = {
                        success: 0,
                        status: response?.respInfo?.status
                    }
                    return JSON.parse(JSON.stringify(res));
                }
                else {
                    return JSON.parse(response.data)
                }
            })
            .then((data) => {
                successCallback(data)
            })
            .catch(function (error) {
                console.log('============= Fetch Error =============');
                console.log(error);
                console.log('============= End Fetch Error =============');
                errorCallback(error);
            });
    },
    getEnum(module, enumKey) {
        let result = [];
        if (enumKey && module && this.enumList[module]) {
            if (this.enumList?.[module]?.[enumKey]) {
                return result.concat(this.enumList[module][enumKey]);
            }
        }

        if (module && !enumKey) {
            return result.concat([...(this.enumList[module] || [])]);
        }

        return [];
    },
    getEnumValue(module, enumKey, key) {
        if (enumKey && module) {
            var res = {};
            if (this.enumList?.[module]?.[enumKey]) {
                this.enumList[module][enumKey].map((item) => {
                    if (item.key == key) {
                        res = item;
                    }
                })
                return res;
            }
        }

        if (!enumKey && module) {
            var res = {};
            if (this.enumList?.[module]) {
                this.enumList[module].map((item) => {
                    if (item.key == key) {
                        res = item;
                    }
                })
                return res;
            }
        }
        return {};
    },
    getEnumLabel(module, enumKey, key) {
        if (enumKey && module) {
            var label = '';
            if (this.enumList?.[module]?.[enumKey]) {
                this.enumList[module][enumKey].map((item) => {
                    if (item.key == key) {
                        label = item.label;
                    }
                })
                return label;
            }
        }

        if (!enumKey && module) {
            var label = '';
            if (this.enumList?.[module]) {
                this.enumList[module].map((item) => {
                    if (item.key == key) {
                        label = item.label;
                    }
                })
                return label;
            }
        }
        return '';
    },
    updateCounters: function (callback) {
        var params = {
            action: 'GetCounters',
        };
        this.callAPI(null, params, data => {
            if (parseInt(data.success) != 1) {
                return;
            }
            console.log('Counter data: ', data);

            this.setCounters(data.data);

            callback(data.data)
        }, error => {
            console.log('get counter error: ', error);
        });
    },
    validateNumber(number) {
        if (!isNaN(number) && parseFloat(number) >= 0) {
            return true;
        }
        return false;
    },
    validateOnlyNumber(number) {
        var letters = /^[0-9]+$/;
        if (number.match(letters)) {
            return true;
        }
        return false;
    },
    isVietnamesePhoneNumber: function (number) {
        return /^(0|[\+]84)+([0-9]{9})$/.test(number)
    },
    validateEmail: function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    },
}

export default Global;