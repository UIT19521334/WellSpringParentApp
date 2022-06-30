import React from 'react'
import { Image, Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { systemColor, UIColor } from '../utils/colors'
import { FontSize } from '../utils/fontSize';
import { NotFoundProps } from '../utils/models';
import { HeightDevice, WidthDevice } from '../utils/sizes';

export default function NotFound(props: NotFoundProps) {
    const [refreshing, setRefreshing] = React.useState(false);
    let runTime = null;
    React.useEffect(() => {
        return () => {
            setRefreshing(false);
            clearTimeout(runTime);
        }
    }, []);
    
    return (
        <View
            style={{
                flex: 1,
                ...(props.style || {})
            }}
        >
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        style={{ transform: [{ scale: Platform.OS == 'ios' ? .8 : 1 }] }}
                        colors={[systemColor(UIColor.accent2), systemColor(UIColor.accent4)]}
                        tintColor={systemColor(UIColor.accent1)}
                        onRefresh={() => {
                            setRefreshing(true);
                            props.reload?.();
                            runTime = setTimeout(() => {
                                setRefreshing(false);
                            }, 2000);
                        }}
                    />
                }
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...(props.contentStyle || {})
                }}

            >
                <Image
                    source={{ uri: 'not_found' }}
                    style={{
                        width: WidthDevice * .6,
                        height: HeightDevice * .25,
                        resizeMode: 'contain',
                        ...(props.imageStyle || {})
                    }}
                />
                {
                    props.title ?
                        (
                            <Text
                                style={{
                                    fontSize: FontSize.h4,
                                    color: systemColor(UIColor.black1),
                                    fontWeight: 'bold',
                                    ...(props.titleStyle || {})
                                }}
                            >
                                {props.title}
                            </Text>
                        )
                        : null
                }
                {
                    props.subTitle ?
                        (
                            <Text
                                style={{
                                    fontSize: FontSize.h4,
                                    color: systemColor(UIColor.black4),
                                    fontWeight: '500',
                                    marginTop: 5,
                                    ...(props.subTitleStyle || {})
                                }}
                            >
                                {props.subTitle}
                            </Text>
                        )
                        : null
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({})
