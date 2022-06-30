import { Button, Center, Divider, HStack, Text } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Icon } from '../themes/Icons/IconCustom'
import { systemColor, UIColor } from '../utils/colors'
import { getLabel } from '../utils/commons'
import { FontSize } from '../utils/fontSize'
import { SectionTitleProps } from '../utils/models'
import { searchHeight } from '../utils/sizes'
import ModalSelect from './ModalSelect'

export default function SectionTitle({
    title = '',
    type = 'Default',
    children,
    initCollapse = true,
    options = [],
    filterSelected = {},
    onSelected = undefined,
    noDivider = false,
    onPressViewAll = undefined
}: SectionTitleProps) {
    const [isShow, setShow] = React.useState(true);
    const modalRef = React.useRef<Modalize>(null)
    React.useEffect(() => {
        if (type == 'Show/Hidden') {
            setShow(initCollapse);
        }
        return () => { setShow(false) }
    }, [])

    const renderRightView = () => {
        if (type === 'ViewAll') {
            return <Button
                variant='unstyled'
                onPress={onPressViewAll}
            >
                <Center>
                    <HStack space={1}>
                        <Text
                            style={{
                                color: systemColor(UIColor.accent1),
                                fontSize: FontSize.h6
                            }}
                        >
                            {getLabel('home.btn_view_all')}
                        </Text>
                        <Icon
                            name='angle-right'
                            size={17}
                            color={systemColor(UIColor.accent1)}
                        />
                    </HStack>
                </Center>
            </Button>
        }
        else if (type == 'Show/Hidden') {
            return <Button
                variant='unstyled'
                _text={{
                    color: systemColor(UIColor.black3),
                    fontSize: FontSize.h5
                }}
                onPress={() => setShow(!isShow)}
            >
                {isShow ? getLabel('common.btn_hide') : getLabel('common.btn_show')}
            </Button>
        }
        else if (type == 'Filter') {
            return (
                <ModalSelect
                    options={[...options]}
                    onSelectedChange={(item, index) => onSelected?.(item)}
                    selected={filterSelected}
                    customView={() => {
                        return (

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: searchHeight
                                }}
                            >
                                <Icon name={'filter'} size={FontSize.h7} style={{ marginRight: 4 }} color={systemColor(UIColor.black)} />
                                <Text style={{
                                    color: systemColor(UIColor.black),
                                    fontSize: FontSize.h5
                                }}>{filterSelected?.label || ''}</Text>
                            </View>
                        )
                    }}
                />

            )

        }

        return null;
    }

    return (
        <>
            <View style={{ ...styles.content }}>
                <View
                    style={{ ...styles.titleContent }}
                >
                    <Text style={{ ...styles.title }}>{title}</Text>
                </View>

                <View
                    style={{ ...styles.rightContent }}
                >
                    {renderRightView()}
                </View>

            </View>

            {
                noDivider ? null : (
                    <Divider
                        style={{
                            marginBottom: 8
                        }}
                    />
                )
            }


            {isShow ? children : null}
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        height: searchHeight
    },
    titleContent: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: FontSize.h5,
        fontWeight: 'bold'
    },
    rightContent: {
        minWidth: 60,
        height: searchHeight,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
