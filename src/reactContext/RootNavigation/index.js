
import * as React from 'react';
import Global from '../../Global';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && Global.navigationRef) {
    // Perform navigation if the app has mounted
    Global.navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
    throw new Error('Can not navigate to ' + name);
  }
}

export function replaceScene(name, params) {
  if (isReadyRef.current && Global.navigationRef) {
    // Perform navigation if the app has mounted
    Global.navigationRef.replace(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
    throw new Error('Can not navigate to ' + name);
  }
}

export function goBack() {
    if (isReadyRef.current && Global.navigationRef) {
      // Perform navigation if the app has mounted
      Global.navigationRef.goBack();
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
      throw new Error('Can not do back to previous screen before!');
    }
  }