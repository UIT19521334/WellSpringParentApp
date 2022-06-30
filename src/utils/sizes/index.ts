import { Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

export const WidthDevice = Dimensions.get('window').width;
export const HeightDevice = Dimensions.get('window').height;
export const isIphoneX = (['IPHONE X', 'IPHONE XS', 'IPHONE XS MAX', 'IPHONE XR', 'IPHONE 11', 'IPHONE 11 PRO', 'IPHONE 11 PRO MAX', 'IPHONE 12', 'IPHONE 12 MINI', 'IPHONE 12 PRO', 'IPHONE 12 PRO MAX'].indexOf((DeviceInfo.getModel()).toUpperCase()) > -1);
export const isTablet = DeviceInfo.isTablet()
export const maxWidthActually = WidthDevice > 736 ? 620 : WidthDevice;
export const maxHeightActually = HeightDevice < 844 ? 844 : HeightDevice;
export const defineHeight52px = 52 / 844;
export const defineHeight64px = 64 / 844;
export const defineHeight62px = 62 / 844;
export const defineHeight44px = 44 / 844;
export const defineHeight36px = 36 / 844;
export const defineHeight32px = 32 / 844;
export const defineHeight115px = 115 / 844;
export const defineHeight100px = 100 / 844;
export const defineHeight160px = 160 / 844;
export const defineHeight80px = 80 / 844;
export const defineHeight40px = 40 / 844;
export const defineHeight20px = 20 / 844;
export const searchHeight = maxHeightActually * defineHeight44px;
export const defineWidth16px = 16 / 390;
export const defineWidth44px = 44 / 390;
export const defineWidth13px = 13 / 390;

export const defaultHeight = (isIphoneX && Platform.OS === 'ios' && !Platform.isPad ? (maxHeightActually * defineHeight52px) : ((maxHeightActually * defineHeight64px) > 64 ? (maxHeightActually * defineHeight64px) : 64));
export const headerAbsoluteHeight = DeviceInfo.isTablet() ? (maxHeightActually * defineHeight115px) : 115;
export const buttonAbsoluteProfileHeight = DeviceInfo.isTablet() ? (maxHeightActually * defineHeight100px) : (maxHeightActually * defineHeight100px) < 100 ? (maxHeightActually * defineHeight100px) : 100;
export const avatarAbsoluteProfileHeight = DeviceInfo.isTablet() ? (maxHeightActually * defineHeight80px) : (maxHeightActually * defineHeight80px) < 80 ? (maxHeightActually * defineHeight80px) : 80;
export const widthBadge = maxWidthActually * defineWidth16px;
export const defaultPaddingHorizontal = maxWidthActually * defineWidth16px;