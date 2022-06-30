import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export type ModalBottomConfirmProps = {
    children: React.ReactNode
}

export type ModalConfirm = {
    title: string,
    message?: string,
    messageCustomView?: () => React.ReactElement,
    buttons: Array<ButtonConfirm>
}

export type ButtonConfirm = {
    isCancel?: boolean,
    title: string,
    buttonStyle?: ViewStyle,
    titleStyle?: TextStyle,
    onPress?: () => void
}

export type ModalBottomConfirmContextProps = {
    modalState: ModalConfirmState,
    initModal: (data: any) => void,
    toggleOverlay: () => void,
    clearState: () => void,
    showModalConfirm: (data: ModalConfirm) => void
}

export type ModalConfirmState = {
    visible: boolean,
    title: string,
    message?: string,
    messageCustomView?: () => React.ReactElement,
    buttons: Array<ButtonConfirm>
}

export type AuthContextProps = {
    authState: AuthStateProps,
    signIn?: (user: UserLogin) => void,
    signOut?: () => void,
    signUp?: (data: any) => void,
    restoreToken?: (token: string) => void
}

export type AuthStateProps = {
    isLoading: boolean,
    isSignOut: boolean,
    userToken: string
}

export type UserLogin = {
    username: string,
    password: string
}

export type AuthenticationManagerProps = {
    children: React.ReactNode
}

export type NotFoundProps = {
    title?: string,
    subTitle?: string,
    titleStyle?: TextStyle,
    subTitleStyle?: TextStyle,
    style?: ViewStyle,
    contentStyle?: ViewStyle,
    imageStyle?: ImageStyle,
    reload?: () => void
}

export type SectionViewProps = {
    children: React.ReactNode,
    style?: ViewStyle
}

export type SectionTitleProps = {

    // Title of section
    title: string,

    // Has children component view
    children?: React.ReactNode,

    // type of section tile to display on right
    type?: 'Show/Hidden' | 'Filter' | 'ViewAll' | 'Default',

    // handle on press view all
    onPressViewAll?: () => void,

    // set default section is show/hide
    initCollapse?: boolean,
    // toggle change state show/hide section
    onToggleShowHide?: (collapse: boolean) => void,
    //custom view type show/hide
    customShowHide?: () => React.ReactElement,

    // custom view type filter
    customFilter?: () => React.ReactElement,

    //define options filter
    options?: Array<object | string>,
    //key will use to show filter selected
    keyDisplay?: string,
    //value selected
    filterSelected?: object | string,
    //handle onSelected filter change
    onSelected?: (value: object | string) => void,
    noDivider?: boolean
}