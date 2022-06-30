import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, Center, VStack } from 'native-base';
import * as React from 'react';
import { View, StyleSheet, ImageBackground, Image, ActivityIndicator } from 'react-native';
import Global from '../../Global';
import { useAuthentication } from '../../hooks/useAuthentication';
import { FontSize } from '../../utils/fontSize';
import { maxHeightActually, maxWidthActually } from '../../utils/sizes';
import CodePush from 'react-native-code-push'

function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const SplashScene = () => {
    const { restoreToken } = useAuthentication();
    const [downloading, setDownloading] = React.useState(false);
    const [syncMessage, setSyncMessage] = React.useState('')
    const [progress, setProgress] = React.useState(null)

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            AsyncStorage.getItem('token', (err, res) => {
                if (err) {
                    restoreToken?.('');
                }

                if (res) {
                    Global.token = res;

                    setTimeout(() => {
                        restoreToken?.(res);
                    }, 1000);
                }
                else {
                    restoreToken?.('');
                }
            });
        }

        Global.init(() => {
            bootstrapAsync();
        });
    }, []);

    return (
        <ImageBackground
            source={require('../../assets/images/splash.jpg')}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            imageStyle={{
                resizeMode: 'stretch'
            }}
        >

            <Image
                source={require('../../assets/images/logo_white.png')}
                style={{
                    width: maxWidthActually * .8,
                    height: maxHeightActually * .3,
                    resizeMode: 'contain',

                }}
            />

            <ActivityIndicator
                color={'#d0d0d0'}
                style={{
                    marginBottom: (maxHeightActually * .25),
                }}
            />
        </ImageBackground>
    );
};

export default SplashScene;

const styles = StyleSheet.create({
    container: {}
});
