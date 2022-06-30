import React from 'react';
import { Platform } from 'react-native';
import NavigatorAndroid from './NavigatorAndroid';
import NavigatorIOS from './NavigatorIOS';

const Navigator = () => {

    if (Platform.OS == 'ios') {
        return <NavigatorIOS />
    }
    else {
        return <NavigatorAndroid />
    }
}


export default Navigator;