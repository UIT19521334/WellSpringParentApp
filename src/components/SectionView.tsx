import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { systemColor, UIColor } from '../utils/colors'
import { SectionViewProps } from '../utils/models'
import { WidthDevice } from '../utils/sizes'

export default function SectionView({ children, style }: SectionViewProps) {
    return (
        <View style={{ ...styles.sectionContainer, ...(style || {}) }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        minHeight: 50,
        backgroundColor: systemColor(UIColor.white),
        paddingHorizontal: WidthDevice * .04,
        width: WidthDevice
    }
})
