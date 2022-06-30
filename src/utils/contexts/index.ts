import React from "react";
import { Modalize } from 'react-native-modalize';
import { AuthContextProps, ModalBottomConfirmContextProps } from '../models'

export const AuthContext = React.createContext<AuthContextProps>({});

export const ModalBottomConfirmContext = React.createContext<ModalBottomConfirmContextProps>({
    modalState: {
        title: '',
        buttons: [],
        visible: false
    },
    initModal: () => {},
    toggleOverlay: () => {},
    showModalConfirm: () => {},
});

export const modalBottomConfirmRef = React.createRef<Modalize>()
