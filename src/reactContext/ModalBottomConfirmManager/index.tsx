import React from 'react'
import { StyleSheet } from 'react-native'
import { ModalBottomConfirmContext, modalBottomConfirmRef } from '../../utils/contexts'
import { ModalBottomConfirmProps, ModalConfirm } from '../../utils/models'

export default function ModalBottomConfirmManager({ children }: ModalBottomConfirmProps) {

    const initState = {
        visible: false,
        title: '',
        message: '',
        messageCustomView: undefined,
        buttons: []
    }

    const reducer = (preState: any, action: any) => {
        switch (action.type) {
            case 'TOGGLE_MODAL':
                if (preState.visible) {
                    return {
                        ...preState,
                        visible: !preState.visible,
                        title: '',
                        message: '',
                        messageCustomView: undefined,
                        buttons: []
                    }
                }
                else {

                    return {
                        ...preState,
                        visible: !preState.visible
                    }
                }
            case 'SHOW_MODAL': {
                return {
                    ...preState,
                    ...action.data,
                    visible: !preState.visible
                }
            }

            case 'CLEAR_STATE': {
                return {
                    ...preState,
                    visible: false,
                    title: '',
                    message: '',
                    messageCustomView: undefined,
                    buttons: []
                }
            }
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initState);

    const modalConfirmContext = React.useMemo(
        () => ({
            initModal: (data: any) => {

            },
            toggleOverlay: () => {
                dispatch({ type: 'TOGGLE_MODAL' });
                modalBottomConfirmRef.current?.close();
            },
            showModalConfirm: (data: ModalConfirm) => {
                dispatch({ type: 'SHOW_MODAL', data: data });
                modalBottomConfirmRef.current?.open();
            },
            clearState: () => {
                dispatch({ type: 'CLEAR_STATE' })
            }
        }),
        []
    )


    return (
        <ModalBottomConfirmContext.Provider value={{ modalState: state, ...modalConfirmContext }}>
            {children}
        </ModalBottomConfirmContext.Provider>
    )
}

const styles = StyleSheet.create({})
