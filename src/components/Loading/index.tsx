import { Box, Center, VStack } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { defineHeight115px, defineHeight80px, HeightDevice, maxHeightActually, WidthDevice } from '../../utils/sizes'
import LottieView from 'lottie-react-native';

const Loading = ({ loading = false, position = 'center', isFullScreen = false }: { loading: boolean, position?: 'center' | 'top', isFullScreen?: boolean }) => {
    if (!loading) {
        return <></>
    }
    return (
        <Box
            position='absolute'
            top={0}
            left={0}
            width={WidthDevice}
            height={HeightDevice * (isFullScreen ? 1 : .7)}
            bg='white.light'
            zIndex={1000}
        >
            {
                position == 'center' ?
                    (
                        <Center
                            paddingY={4}
                            flex={1}
                        >
                            <LottieView
                                source={require('../../assets/lottie/loading.json')}
                                autoPlay
                                loop
                                style={{
                                    transform: [
                                        {
                                            scale: .8
                                        }
                                    ]
                                }}
                                enableMergePathsAndroidForKitKatAndAbove
                                cacheStrategy='none'
                                resizeMode='center'
                            />
                        </Center>
                    ) :
                    (
                        <Center
                           flex={1}
                           style={{
                            justifyContent:'flex-start',
                            alignItems:'center',
                           }}
                        >
                            <LottieView
                                source={require('../../assets/lottie/loading.json')}
                                autoPlay
                                loop
                                style={{
                                    height: maxHeightActually * defineHeight115px * 1.3,
                                    transform: [
                                        {
                                            scale: .6
                                        }
                                    ]
                                }}
                                enableMergePathsAndroidForKitKatAndAbove
                                cacheStrategy='none'
                                resizeMode='center'
                            />
                        </Center>
                    )
            }

        </Box>

    )
}

export default Loading
