/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Setup from './src/setup';
import ReactNative, { NativeModules } from 'react-native'
import { enableScreens } from 'react-native-screens';
import CodePush from 'react-native-code-push'

ReactNative.LogBox.ignoreLogs([
  'Sending \`onAnimatedValueUpdate\` with no listeners registered.',
]);

enableScreens(true);

ReactNative.LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Setup />
  );
};

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default CodePush(codePushOptions)(App);
