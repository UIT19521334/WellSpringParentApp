import { NavigationContainer } from '@react-navigation/native';
import { HStack, Spacer, Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useAuthentication } from '../hooks/useAuthentication';
import { goBack, isReadyRef, navigationRef } from '../reactContext/RootNavigation';
import SplashScene from '../scenes/Splash';
import { Icon } from '../themes/Icons/IconCustom';
import { systemColor, UIColor } from '../utils/colors';
import { FontSize } from '../utils/fontSize';
import Global from '../Global';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';

const Stack = createNativeStackNavigator();

const UnAuthenticationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='WelcomeScene'
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen
                name='WelcomeScene'
                component={WelcomeScene}
            />

            <Stack.Screen
                name='LoginScene'
                component={LoginScene}
            />

            <Stack.Screen
                name='ForgetPasswordScene'
                component={ForgetPasswordScene}
            />

            <Stack.Screen
                name='RegisterScene'
                component={RegisterScene}
            />

            <Stack.Screen
                name='VerifyOTPRegisterScene'
                component={VerifyOTPRegisterScene}
            />

            <Stack.Screen
                name='CheckPhoneNunberScene'
                component={CheckPhoneNunberScene}
            /> */}
        </Stack.Navigator>
    )
}

const AuthenticationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='MainStack'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen
                name='MainStack'
                component={MainStack}
            />

        </Stack.Navigator>
    )
}

const MainStack = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <Stack.Navigator
                initialRouteName='HomeScene'
                screenOptions={{
                    headerShown: false
                }}

            >
                {/* <Stack.Screen
                    name='HomeScene'
                    component={HomeScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />

                <Stack.Screen
                    name='ContactScene'
                    component={ContactScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />

                <Stack.Screen
                    name='NotificationScene'
                    component={NotificationScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: false,

                        }
                    }}
                />

                <Stack.Screen
                    name='AccountScene'
                    component={AccountScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />

                <Stack.Screen
                    name='AboutScene'
                    component={AboutScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='ChangePasswordScene'
                    component={ChangePasswordScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='SettingsScene'
                    component={SettingsScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='StudentInformationScene'
                    component={StudentInformationScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='ProfileScene'
                    component={ProfileScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='TrackingStudentScene'
                    component={TrackingStudentScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}

                />

                <Stack.Screen
                    name='ResultLearningScene'
                    component={ResultLearningScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='FoodsScene'
                    component={FoodsScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='NewsViewScene'
                    component={NewsViewScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='NewsListScene'
                    component={NewsListScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='LeavingViewScene'
                    component={LeavingViewScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='LeavingListScene'
                    component={LeavingListScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                />

                <Stack.Screen
                    name='LeavingFormScene'
                    component={LeavingFormScene}
                    options={({ route, navigation }) => {
                        return {
                            headerShown: false,
                            gestureEnabled: true,
                        }
                    }}
                /> */}

            </Stack.Navigator>

            {/* <BottomTab /> */}
        </View>
    )
}

const NavigatorIOS = () => {
    const { authState, signOut } = useAuthentication();

    useEffect(() => {
        DeviceEventEmitter.addListener('Authenticate.SignOut', () => {
            console.log('Authenticate.SignOut========');
            signOut?.();
        });
        
        return () => { };
    }, []);

    return (
        <NavigationContainer
            ref={navRef => { Global.navigationRef = navRef }}
            onReady={() => { isReadyRef.current = true }}
        >
            <Stack.Navigator>
                {
                    authState.isLoading ?
                        (
                            <Stack.Screen
                                name='SplashScene'
                                component={SplashScene}
                                options={{
                                    headerShown: false,
                                    stackPresentation: 'containedModal'
                                }}
                            />
                        )
                        : !authState.userToken ?
                            (
                                <Stack.Screen
                                    name='UnAuthenticationStack'
                                    component={UnAuthenticationStack}
                                    options={{
                                        headerShown: false,
                                        stackPresentation: 'containedModal'
                                    }}
                                />
                            )
                            :
                            (
                                <Stack.Screen
                                    name='AuthenticationStack'
                                    component={AuthenticationStack}
                                    options={{
                                        headerShown: false,
                                        stackPresentation: 'containedModal'
                                    }}
                                />
                            )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorIOS;