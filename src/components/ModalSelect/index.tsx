import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontSize } from '../../utils/fontSize'
import { Icon } from '../../themes/Icons/IconCustom'
import { systemColor, UIColor } from '../../utils/colors'
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { defineWidth16px, HeightDevice, maxHeightActually, maxWidthActually, searchHeight } from '../../utils/sizes'
import { Box } from 'native-base'

type ModalSelectProps = {
    options: Array<any>,
    selected?: string | object | any,
    onSelectedChange?: (item: object | any, index: number) => void,
    customView?: () => React.ReactNode,
    color?: string,
    isHeader?: boolean,
}

export default function ModalSelect({ options = [], selected = {}, onSelectedChange = undefined, customView = undefined, color = systemColor(UIColor.white), isHeader = false }: ModalSelectProps) {

    const areaInsets = useSafeAreaInsets()

    const modalizeRef = React.useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef?.current?.open();
    };

    const [labelDisplay, setLabelDisplay] = React.useState('');

    React.useEffect(() => {
        console.log('Selected change: ', selected);
        
        if (selected) {
            if (typeof selected == 'string') {

                const indexItem = options?.findIndex((opt) => opt?.key?.toString().trim().toLocaleUpperCase() == selected.toString().trim().toLocaleUpperCase())
                let res = options[indexItem != -1 ? indexItem : 0];

                if (isHeader) {
                    setLabelDisplay(res?.key ? res?.label : 'Tất cả')
                }
                else {
                    setLabelDisplay(options[indexItem != -1 ? indexItem : 0]?.label)
                }
            }

            if (typeof selected == 'object') {
                if (isHeader) {
                    setLabelDisplay(selected?.key ? selected?.label : 'Tất cả')
                }
                else {
                    setLabelDisplay(selected?.label || '')
                }
            }
        }

        return () => {
        }
    }, [selected])


    return (
        <View>
            {
                customView ? (
                    <TouchableOpacity style={{ ...styles.content }} onPress={onOpen}>
                        {customView()}
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{ ...styles.content }} onPress={onOpen}>
                        <View>
                            <Text style={{ ...styles.labelSelected, color }}>{labelDisplay}</Text>
                        </View>
                        <View>
                            <Icon name='angle-down' style={{ ...styles.iconAngleDown, color }} />
                        </View>
                    </TouchableOpacity>
                )
            }

            <Portal>
                <Modalize
                    ref={modalizeRef}
                    snapPoint={HeightDevice * .5}
                    modalHeight={HeightDevice * .7}
                    // adjustToContentHeight={true}
                    modalStyle={{
                        backgroundColor: systemColor(UIColor.white)
                    }}
                    HeaderComponent={
                        <View
                            style={{
                                height: 40
                            }}
                        >

                        </View>
                    }
                >

                    <View
                        style={{
                            ...styles.contentModal
                        }}
                    >

                        {
                            options && options?.map((item, index) => {
                                let hasHightLight = false;
                                const hasString = typeof selected == 'string';
                                const hasObject = typeof selected == 'object';

                                if (hasString) {
                                    hasHightLight = selected == item?.key;
                                }

                                if (hasObject) {
                                    hasHightLight = selected?.key == item?.key;
                                }

                                return (
                                    // <ListItem
                                    //     key={index}
                                    //     containerStyle={{
                                    //         ...styles.itemOption,
                                    //         ...styles.shadow,
                                    //         ...(hasHightLight ? styles.itemOptionSelected : {})
                                    //     }}
                                    //     underlayColor={hasHightLight ? systemColor(UIColor.accent2) : systemColor(UIColor.black8)}
                                    //     activeOpacity={.4}
                                    //     style={{
                                    //         ...styles.itemOption,
                                    //         paddingVertical: 0,
                                    //     }}
                                    //     onPress={() => {
                                    //         onSelectedChange?.(item, index);
                                    //         modalizeRef?.current?.close();
                                    //     }}
                                    // >
                                    //     <ListItem.Content>
                                    //         <ListItem.Title style={{ ...styles.labelListItem, ...(hasHightLight ? styles.labelListItemSelected : {}) }}>{item?.label || ''}</ListItem.Title>
                                    //     </ListItem.Content>

                                    //     {
                                    //         hasHightLight ? (<Icon name='check' style={{ ...styles.iconSelected }} />) : null
                                    //     }

                                    // </ListItem>
                                    <Box>
                                        
                                    </Box>
                                )
                            })
                        }
                    </View>
                    <View
                        style={{
                            height: areaInsets.bottom + 34
                        }}
                    />

                </Modalize>
            </Portal>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: searchHeight
    },
    labelSelected: {
        color: systemColor(UIColor.white),
        marginRight: 4,
        fontSize: FontSize.h5
    },
    iconAngleDown: {
        color: systemColor(UIColor.white),
        fontSize: FontSize.h4
    },
    contentModal: {
        paddingHorizontal: maxWidthActually * defineWidth16px,
        marginTop: 8
    },
    itemOption: {
        marginBottom: 12,
        borderRadius: 12,
        height: maxHeightActually * .06
    },
    shadow: {
        shadowColor: systemColor(UIColor.black5),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemOptionSelected: {
        backgroundColor: systemColor(UIColor.accent7)
    },
    labelListItem: {
        color: systemColor(UIColor.black),
        fontSize: FontSize.h4
    },
    labelListItemSelected: {
        color: systemColor(UIColor.accent2),
        fontSize: FontSize.h4
    },
    iconSelected: {
        color: systemColor(UIColor.accent2),
        fontSize: FontSize.h5

    }
})
