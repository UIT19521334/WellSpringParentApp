import { Box, Text, Center, VStack } from 'native-base'
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { defineHeight115px, defineHeight80px, HeightDevice, maxHeightActually, WidthDevice } from '../../utils/sizes'
import LottieView from 'lottie-react-native';
import { Portal } from 'react-native-portalize';
import { systemColor, UIColor } from '../../utils/colors';
import { FontSize } from '../../utils/fontSize';

const LoadingOverlay = ({ loading = false, message = '' }: { loading: boolean, message?: string }) => {
    if (!loading) {
        return <></>
    }
    return (
        <Portal>
            <Box
                position='absolute'
                top={0}
                left={0}
                width={WidthDevice}
                height={HeightDevice}
                justifyContent='center'
                alignItems='center'
                zIndex={1000}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
            >
                <VStack
                    backgroundColor='white.light'
                    style={{
                        paddingVertical: 22,
                        paddingHorizontal: 20,
                        borderRadius: 8
                    }}
                    space={2}
                >
                    <ActivityIndicator size='large' color={systemColor(UIColor.accent2)} />
                    <Text
                        fontSize={FontSize.h6}
                        color='black2.light'
                    >
                        {message}
                    </Text>
                </VStack>
            </Box>
        </Portal>
    )
}

export default LoadingOverlay
