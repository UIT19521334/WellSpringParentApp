import React from 'react'
import { Alert } from 'react-native';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FontSize } from '../../utils/fontSize';
import { Icon } from '../../themes/Icons/IconCustom';
import { BackgroundGradient, systemColor, UIColor } from '../../utils/colors';
import { defaultPaddingHorizontal, defineHeight40px, defineHeight44px, defineHeight52px, defineHeight64px, defineWidth16px, HeightDevice, isIphoneX, maxHeightActually, maxWidthActually, searchHeight, WidthDevice } from '../../utils/sizes'
import ModalSelect from '../ModalSelect';

type HeaderType = 'ONLY_SEARCH' | 'TITLE_AND_SEARCH' | 'TITLE_FILTER_AND_SEARCH' | 'LARGE_TITLE' | 'DEFAULT_IOS' | 'CUSTOMIZE';

type HeaderBaseProps = {
    headerType: HeaderType,
    title?: string,
    subTitle?: string,
    placeHolderSearch?: string,
    searchType?: 'AUTO' | 'MANUAL',
    onSearch?: (keyword: string) => void,
    iconLeft?: string,
    labelLeft?: string,
    actionLeft?: () => void,
    iconRight?: string,
    labelRight?: string,
    actionRight?: () => void,
    isGradient?: boolean,
    options?: Array<any>,
    selected?: string | object,
    onSelectedChange?: (item: object | any) => void,
    children?: React.ReactNode,
    plusHeight?: number,
    isModal?: boolean
}

export default function HeaderBase(props: HeaderBaseProps) {
    const areasInsets = useSafeAreaInsets();
    const HEADER_HEIGHT = (64) + areasInsets.top;
    const defaultHeight = HEADER_HEIGHT
    // const defaultHeight = (areasInsets.top > 0 && Platform.OS === 'ios' && !Platform.isPad ? (maxHeightActually * defineHeight52px) : ((maxHeightActually * defineHeight64px) > 64 ? (maxHeightActually * defineHeight64px) : 64)) + (props.isModal ? 0 : areasInsets.top);
    const [keyword, setKeyword] = React.useState('')

    const [widthButtonLeft, setWidthButtonLeft] = React.useState(0)
    const [widthButtonRight, setWidthButtonRight] = React.useState(0)

    const getHeaderHeight = () => {
        if (!props?.headerType) return defaultHeight;

        switch (props.headerType) {
            case 'TITLE_AND_SEARCH':
                return defaultHeight + (maxHeightActually * defineHeight44px) + (props.plusHeight || 0);
            case 'TITLE_FILTER_AND_SEARCH':
                return defaultHeight + (maxHeightActually * defineHeight44px) + (props.plusHeight || 0);
            case 'LARGE_TITLE':
                return defaultHeight + (maxHeightActually * defineHeight40px) + (props.plusHeight || 0);
            case 'ONLY_SEARCH':
                return defaultHeight + (props.plusHeight || 0);
            case 'CUSTOMIZE' : 
            return ((maxHeightActually * defineHeight64px) > 64 ? (maxHeightActually * defineHeight64px) : 64) + areasInsets.top + (props.plusHeight || 0);
            default:
                return defaultHeight + (props.plusHeight || 0);
        }
    }

    const onSearchChangeText = React.useCallback((keyword) => {
        setKeyword(keyword);
        if (!keyword) {
            onSearching()
        }
    }, []);
    const onSearching = React.useCallback(() => { props.onSearch?.(keyword); }, [keyword]);

    const _renderHeaderOnlySearch = () => {
        return (
            <>
                {props?.searchType == 'AUTO' ? _renderSearchLine() : _renderSearchGroup()}
            </>
        )
    }

    const _renderHeaderDefaultIOS = () => {
        const hasButtonLeft = props?.iconLeft || props?.labelLeft;
        const hasButtonRight = props?.iconRight || props?.labelRight;

        const needSymmetryLeft = hasButtonLeft && !hasButtonRight;
        const needSymmetryRight = hasButtonRight && !hasButtonLeft;

        return (
            <View
                style={{
                    ...styles.contentSearchOnly,
                    alignItems: 'center',
                    paddingHorizontal: 0,
                }}
            >
                {/* Left */}
                {
                    hasButtonLeft ?
                        (
                            <TouchableOpacity
                                style={{
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: maxWidthActually * defineWidth16px,
                                }}
                                onLayout={(e) => {
                                    setWidthButtonLeft(e.nativeEvent.layout.width)
                                }}
                                onPress={props?.actionLeft}
                            >
                                {
                                    props.labelLeft ?
                                        (
                                            <Text
                                                style={{
                                                    fontSize: FontSize.h5,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            >{props.labelLeft}</Text>
                                        )
                                        : null
                                }
                                {
                                    props.iconLeft ?
                                        (
                                            <Icon
                                                name={props.iconLeft}
                                                style={{
                                                    fontSize: FontSize.h2,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            />
                                        )
                                        : null
                                }

                            </TouchableOpacity>

                        ) : null
                }

                {/* Body */}

                <View
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: needSymmetryLeft ? widthButtonLeft : (widthButtonLeft > widthButtonRight ? (widthButtonLeft - widthButtonRight) : 0),
                        paddingLeft: needSymmetryRight ? widthButtonRight : (widthButtonRight > widthButtonLeft ? (widthButtonRight - widthButtonLeft) : 0)

                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.h4 - 1,
                            fontWeight: 'bold',
                            color: systemColor(UIColor.white)
                        }}
                    >{props?.title || ''}</Text>
                </View>

                {/* Right */}
                {
                    hasButtonRight ? (
                        <TouchableOpacity
                            style={{
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: maxWidthActually * defineWidth16px,
                            }}
                            onLayout={(e) => {
                                setWidthButtonRight(e.nativeEvent.layout.width)
                            }}
                            onPress={props?.actionRight}
                        >
                            {
                                props.labelRight ?
                                    (
                                        <Text
                                            style={{
                                                fontSize: FontSize.h5,
                                                color: systemColor(UIColor.white)
                                            }}
                                        >{props.labelRight}</Text>
                                    )
                                    : null
                            }
                            {
                                props.iconRight ?
                                    (
                                        <Icon
                                            name={props.iconRight}
                                            style={{
                                                fontSize: FontSize.h2,
                                                color: systemColor(UIColor.white)
                                            }}
                                        />
                                    )
                                    : null
                            }
                        </TouchableOpacity>

                    ) : null
                }
            </View>
        )
    }

    const _renderHeaderDefaultTitleAndSearch = () => {
        const hasButtonRight = props?.iconRight || props?.labelRight;
        return (
            <>
                <View
                    style={{
                        ...styles.contentSearchOnly,
                        alignItems: 'center',
                        paddingHorizontal: 0,
                        maxHeight: searchHeight,
                    }}
                >
                    {/* Body */}

                    <View
                        style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: maxWidthActually * defineWidth16px,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: FontSize.h4 - 1,
                                fontWeight: 'bold',
                                color: systemColor(UIColor.white)
                            }}
                            numberOfLines={1}
                        >{props?.title || ''}</Text>
                    </View>

                    {/* Right */}
                    {
                        hasButtonRight ? (
                            <TouchableOpacity
                                style={{
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: maxWidthActually * defineWidth16px,
                                }}
                                onPress={props?.actionRight}
                            >
                                {
                                    props.labelRight ?
                                        (
                                            <Text
                                                style={{
                                                    fontSize: FontSize.h5,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            >{props.labelRight}</Text>
                                        )
                                        : null
                                }
                                {
                                    props.iconRight ?
                                        (
                                            <Icon
                                                name={props.iconRight}
                                                style={{
                                                    fontSize: FontSize.h5,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            />
                                        )
                                        : null
                                }
                            </TouchableOpacity>

                        ) : null
                    }
                </View>
                { props.searchType == 'MANUAL' ? _renderSearchGroup() : _renderSearchLine()}
            </>
        )
    }

    const _renderHeaderDefaultTitleAndFilterAndSearch = () => {
        return (
            <>
                <View
                    style={{
                        ...styles.contentSearchOnly,
                        alignItems: 'center',
                        paddingHorizontal: 0,
                        maxHeight: searchHeight,
                    }}
                >
                    {/* Body */}

                    <View
                        style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: maxWidthActually * defineWidth16px,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: FontSize.h4 - 1,
                                fontWeight: 'bold',
                                color: systemColor(UIColor.white)
                            }}
                            numberOfLines={1}
                        >{props?.title || ''}</Text>
                    </View>

                    {/* Right */}

                    <View>
                        <ModalSelect
                            isHeader
                            options={[...(props?.options || [])]}
                            selected={props?.selected || {}}
                            onSelectedChange={(item, index) => props?.onSelectedChange?.(item)}
                        />
                    </View>
                </View>
                {props?.searchType == 'MANUAL' ? _renderSearchGroup() : _renderSearchLine()}
            </>
        )
    }

    const _renderHeaderDefaultLargeTitle = () => {
        const hasButtonRight = props?.iconRight || props?.labelRight;

        return (
            <>
                <View
                    style={{
                        ...styles.contentSearchOnly,
                        alignItems: 'center',
                        paddingHorizontal: 0,
                        maxHeight: searchHeight,
                    }}
                >
                    {/* Body */}

                    <View
                        style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: maxWidthActually * defineWidth16px,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: FontSize.h4,
                                fontWeight: 'bold',
                                color: systemColor(UIColor.white)
                            }}
                            numberOfLines={1}
                        >{props?.title || ''}</Text>
                    </View>

                    {/* Right */}
                    {
                        hasButtonRight ? (
                            <TouchableOpacity
                                style={{
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: maxWidthActually * defineWidth16px,
                                }}
                                onLayout={(e) => {
                                    setWidthButtonRight(e.nativeEvent.layout.width)
                                }}
                                onPress={props?.actionRight}
                            >
                                {
                                    props.labelRight ?
                                        (
                                            <Text
                                                style={{
                                                    fontSize: FontSize.h5,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            >{props.labelRight}</Text>
                                        )
                                        : null
                                }
                                {
                                    props.iconRight ?
                                        (
                                            <Icon
                                                name={props.iconRight}
                                                style={{
                                                    fontSize: FontSize.h5,
                                                    color: systemColor(UIColor.white)
                                                }}
                                            />
                                        )
                                        : null
                                }
                            </TouchableOpacity>

                        ) : null
                    }
                </View>

                <View
                    style={{
                        paddingHorizontal: defaultPaddingHorizontal,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                            color: systemColor(UIColor.white),
                            fontSize: FontSize.h5,
                        }}
                    >{props?.subTitle || ''}</Text>
                </View>
            </>
        )
    }

    const _renderSearchLine = () => {
        return (
            <View
                style={{
                    ...styles.contentSearchOnly,
                    alignItems: 'flex-start',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        backgroundColor: systemColor(UIColor.black9),
                        borderRadius: 5
                    }}
                >
                    <TouchableOpacity
                        style={{ ...styles.searchContent, marginLeft: 0, backgroundColor: 'transparent' }}
                    >
                        <Icon
                            name='search'
                            style={{ ...styles.iconSearch }}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder={props?.placeHolderSearch || ''}
                        placeholderTextColor={systemColor(UIColor.black4)}
                        style={{
                            ...styles.inputOnly,
                            backgroundColor: 'transparent',
                            paddingLeft: 0,
                        }}
                        defaultValue={keyword}
                        onChangeText={onSearchChangeText}
                        clearButtonMode='while-editing'
                        returnKeyType='search'
                        onSubmitEditing={onSearching}
                    />
                </View>
            </View>
        )
    }

    const _renderSearchGroup = () => {
        return (
            <View
                style={{
                    ...styles.contentSearchOnly
                }}
            >
                <TextInput
                    placeholder={props?.placeHolderSearch || ''}
                    placeholderTextColor={systemColor(UIColor.black4)}
                    style={{
                        ...styles.inputOnly
                    }}
                    defaultValue={keyword}
                    onChangeText={onSearchChangeText}
                    clearButtonMode='while-editing'
                    returnKeyType='search'
                    onSubmitEditing={onSearching}
                />
                <TouchableOpacity
                    style={{ ...styles.searchContent }}
                    onPress={onSearching}
                >
                    <Icon
                        name='search'
                        style={{ ...styles.iconSearch }}
                    />
                </TouchableOpacity>
            </View>
        )
    }



    return (
        <LinearGradient
            colors={props?.isGradient ? BackgroundGradient : [systemColor(UIColor.accent2), systemColor(UIColor.accent2)]}
            start={{ x: 0, y: .7 }}
            end={{ x: 0, y: 0 }}
            style={{ ...styles.container, height: getHeaderHeight(), paddingTop: props.isModal ? 0 : areasInsets.top }}
        >
            {props?.headerType == 'LARGE_TITLE' && _renderHeaderDefaultLargeTitle()}
            {props?.headerType == 'ONLY_SEARCH' && _renderHeaderOnlySearch()}
            {props?.headerType == 'DEFAULT_IOS' && _renderHeaderDefaultIOS()}
            {props?.headerType == 'TITLE_AND_SEARCH' && _renderHeaderDefaultTitleAndSearch()}
            {props?.headerType == 'TITLE_FILTER_AND_SEARCH' && _renderHeaderDefaultTitleAndFilterAndSearch()}
            {props?.headerType == 'CUSTOMIZE' && props?.children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: systemColor(UIColor.accent2),
        position: 'absolute',
        top: 0,
        left: 0,
        width: WidthDevice,
        zIndex: Number.MAX_SAFE_INTEGER
    },
    contentSearchOnly: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: maxWidthActually * defineWidth16px,
        alignItems: isIphoneX ? 'flex-start' : 'center'
    },
    inputOnly: {
        flex: 1,
        backgroundColor: systemColor(UIColor.black9),
        height: searchHeight,
        maxHeight: searchHeight,
        borderRadius: 6,
        paddingLeft: 12,
        fontSize: FontSize.h5
    },
    searchContent: {
        width: searchHeight,
        height: searchHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 2,
        backgroundColor: systemColor(UIColor.black9)
    },
    iconSearch: {
        fontSize: FontSize.h5
    }

})
