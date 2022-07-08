import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HStack, Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { useAuthentication } from '../hooks/useAuthentication';
import { goBack, isReadyRef } from '../reactContext/RootNavigation';
import SplashScene from '../scenes/Splash';
import { Icon } from '../themes/Icons/IconCustom';
import { systemColor, UIColor } from '../utils/colors';
import { FontSize } from '../utils/fontSize';
import Global from '../Global';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import WelcomeScene from "../scenes/WelcomeScene";
import LoginScene from '../scenes/LoginScene';
import HomeScene from '../scenes/HomeScene';
import AccountScene from '../scenes/AccountScene';
import NotificationScene from '../scenes/NotificationScene';
import ContactScene from '../scenes/ContactScene';
import ForgetPasswordScene from '../scenes/ForgetPasswordScene/';
import ForgetOTP from '../scenes/ForgetPasswordScene/ForgetOTP/';
import NewPassword from '../scenes/ForgetPasswordScene/NewPassword';
import RegisterScene from '../scenes/RegisterScene';
import RegisterOTP from '../scenes/RegisterScene/RegisterOTP';
import InputPassword from '../scenes/RegisterScene/InputPass';
import Register from '../scenes/RegisterScene/Register/';
import BottomTabAndroid from '../components/BottomTabAndroid';
import ListNew from '../scenes/HomeScene/ListNews';
import NewsDetail from '../scenes/HomeScene/NewsDetail';
import BusScene from '../scenes/BusScene';
import OnleaveScene from '../scenes/OnleaveScene';
import CreateLeave from '../scenes/OnleaveScene/CreateLeave';
import OnleaveDetail from '../scenes/OnleaveScene/OnleaveDetail';
import LearningOutcomes from '../scenes/LearningScene';
import MenuFoodScene from '../scenes/MenuFoodScene';
import FoodRegister from '../scenes/MenuFoodScene/FoodRegister';
const Stack = createStackNavigator();

const UnAuthenticationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='WelcomeScene'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
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
                name='ForgetOTP'
                component={ForgetOTP}
            />
            <Stack.Screen
                name='NewPassword'
                component={NewPassword}
            />

            <Stack.Screen
                name='RegisterScene'
                component={RegisterScene}
            />
            <Stack.Screen
                name='RegisterOTP'
                component={RegisterOTP}
            />
            <Stack.Screen
                name='InputPassword'
                component={InputPassword}
            />
            <Stack.Screen
                name='Register'
                component={Register}
            />

            <Stack.Screen
                name='VerifyOTPRegisterScene'
                component={View}
            />

            <Stack.Screen
                name='CheckPhoneNunberScene'
                component={View}
            />
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
            <Stack.Screen
                name='CreateLeave'
                component={CreateLeave}
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
                <Stack.Screen
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
                    name='ListNews'
                    component={ListNew}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='NewsDetail'
                    component={NewsDetail}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='BusScene'
                    component={BusScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='OnleaveScene'
                    component={OnleaveScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='OnleaveDetail'
                    component={OnleaveDetail}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='LearningOutcomes'
                    component={LearningOutcomes}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='MenuFoodScene'
                    component={MenuFoodScene}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='FoodRegister'
                    component={FoodRegister}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                {/*
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
                    name='ManagementPasswordScene'
                    component={ManagementPasswordScene}
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
                            stackPresentation: 'fullScreenModal'
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
                    }}options={({ route, navigation }) => {
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
                /> */}

            </Stack.Navigator>

            <BottomTabAndroid />
        </View>
    )
}

const NavigatorAndroid = () => {
    const { authState, signOut } = useAuthentication();

    useEffect(() => {
        DeviceEventEmitter.addListener('Authenticate.SignOut', () => {
            console.log('Authenticate.SignOut========');
            signOut?.();
        })
        return () => { };
    }, [])

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
                                    }}
                                />
                            )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorAndroid;