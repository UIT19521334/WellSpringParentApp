import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigator from './navigators';
import AuthenticationManager from './reactContext/AuthenticationManager'
import ModalBottomConfirmManager from './reactContext/ModalBottomConfirmManager';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import ModalBottomConfirm from './scenes/ModalBottomConfirm';
import { Host } from 'react-native-portalize';
import { NativeBaseProvider, extendTheme, StorageManager, ColorMode } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const newColorTheme = {
    transparent: 'transparent',

    brand: { 
      100: 'rgb(0, 130, 200)', 
      200: 'rgb(245, 123, 32)', 
      300: 'rgb(80, 185, 72)',
      400: 'rgb(252, 176, 52)',
      500: 'rgba(252, 176, 52, 1)',
      600: 'rgba(255, 241, 236, 1)',
      700: '#008DA8',
      800: 'rgba(230, 244, 247, 1)',
      900: 'rgb(245, 123, 32)'
    },

    black: { light: '#333', dark: '#fff' },
    black1: { light: '#525252', dark: '#525252' },
    black2: { light: '#666666', dark: '#666666' },
    black3: { light: '#7A7A7A', dark: '#7A7A7A' },
    black4: { light: '#8A8A89', dark: '#8A8A89' },
    black5: { light: '#A3A3A3', dark: '#A3A3A3' },
    black6: { light: '#B8B8B8', dark: '#B8B8B8' },
    black7: { light: '#CCCCCC', dark: '#CCCCCC' },
    black8: { light: '#E0E0E0', dark: '#E0E0E0' },
    black9: { light: '#faf9fe', dark: '#faf9fe' },

    white: { light: '#fff', dark: '#333' },

    accent: { light: '#008DA8', dark: '#008DA8' },
    accent1: { light: '#008DA8', dark: '#008DA8' },
    accent2: { light: '#008DA8', dark: '#008DA8' },
    accent3: { light: '#0076F5', dark: '#0076F5' },
    accent4: { light: '#1F8BFF', dark: '#1F8BFF' },
    accent5: { light: '#47A0FF', dark: '#47A0FF' },
    accent6: { light: '#70B5FF', dark: '#70B5FF' },
    accent7: { light: '#99CAFF', dark: '#99CAFF' },
    accent8: { light: '#C2DFFF', dark: '#C2DFFF' },
    accent9: { light: '#f5f7fb', dark: '#f5f7fb' },
   
    useful: { light: '#CB2314', dark: '#CB2314' },
    useful1: { light: '#E93120', dark: '#E93120' },
    useful2: { light: '#F0766A', dark: '#F0766A' },
    useful3: { light: '#F49890', dark: '#F49890' },
    useful4: { light: '#FCDCDA', dark: '#FCDCDA' },
    useful5: { light: '#fff1ec', dark: '#fff1ec' },
    
    positive: { light: '#238060', dark: '#238060' },
    positive1: { light: '#30B083', dark: '#30B083' },
    positive2: { light: '#63C09B', dark: '#63C09B' },
    positive3: { light: '#8CCFB5', dark: '#8CCFB5' },
    positive4: { light: '#CFF2E6', dark: '#CFF2E6' },
    
    careful: { light: '#664200', dark: '#664200' },
    careful1: { light: '#FFA600', dark: '#FFA600' },
    careful2: { light: '#FFB845', dark: '#FFB845' },
    careful3: { light: '#FFC15E', dark: '#FFC15E' },
    careful4: { light: '#FFEAC2', dark: '#FFEAC2' },
  };

  const configColor = {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  };

  const components = {
    Text: {
      baseStyle: {
        color: 'black.light'
      },
      defaultProps: { allowFontScaling : false },
      sizes: {
        xl: { fontSize: '22px' },
        lg: { fontSize: '18px' },
        md: { fontSize: '14px' },
        sm: { fontSize: '12px' },
      }
    },
    Input: {
      defaultProps: { allowFontScaling : false },
    }
  }

const theme = extendTheme({ colors: newColorTheme, config: configColor, components: components });

const config = {
    dependencies: {
      // For Expo projects (Bare or managed workflow)
    //   'linear-gradient': require('expo-linear-gradient').LinearGradient,
      // For non expo projects
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };

export default function Setup() {

    const colorModeManager: StorageManager = {
        get: async () => {
          try {
            let val = await AsyncStorage.getItem('@my-app-color-mode');
            console.log('@my-app-color-mode', val);
            return val === 'dark' ? 'dark' : 'light';
          } catch (e) {
            console.log(e);
            return 'light';
          }
        },
        set: async (value: ColorMode) => {
          try {
            await AsyncStorage.setItem('@my-app-color-mode', value);
          } catch (e) {
            console.log(e);
          }
        },
      };

    return (
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager} config={config}>
            <SafeAreaProvider>
                <AuthenticationManager>
                    <ModalBottomConfirmManager>
                        {/* <ModalBottomConfirm> */}
                          
                            <Host>
                                <Provider store={store}>
                                    <Navigator />
                                </Provider>
                            </Host>
                          
                        {/* </ModalBottomConfirm> */}
                    </ModalBottomConfirmManager>
                </AuthenticationManager>
            </SafeAreaProvider>
        </NativeBaseProvider>
    )
}