import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { View, HStack } from 'native-base';
import { systemColor, UIColor } from '../../../utils/colors';
import { defaultPaddingHorizontal, maxWidthActually } from '../../../utils/sizes'
import { FontSize } from '../../../utils/fontSize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { getLabel } from '../../../utils/commons';
const MenuComponent = (props: any) => {
	return (
		<View
			backgroundColor={systemColor(UIColor.white)}
			paddingLeft={defaultPaddingHorizontal}
			paddingRight={defaultPaddingHorizontal}
			paddingTop={4}
			paddingBottom={4}
		>
			{
				props.type == 'breakfast' ?
					<HStack alignItems='center' >
						<Text style={styles.title}>{getLabel('meal.label_breakfast')}</Text>
						<FontAwesome5 name='hamburger' size={20} color={systemColor(UIColor.useful1)} />
					</HStack> : undefined 
			}
			{
				props.type == 'lunch' ?
					<HStack alignItems='center' >
						<Text style={styles.title}>{getLabel('meal.label_lunch')}</Text>
						<Entypo name='bowl' size={20} color={systemColor(UIColor.useful1)} />
					</HStack> : undefined
			}
			{
				props.type == 'snack' ?
					<HStack alignItems='center' >
						<Text style={styles.title}>{getLabel('meal.label_snack')}</Text>
						<FontAwesome5 name='coffee' size={20} color={systemColor(UIColor.useful1)} />
					</HStack> : undefined
			}
			{
				props.data.map((item: any, index: number) => (
					<HStack alignItems='center' marginTop={2} >
						<Text style={styles.dot}>●</Text>
						<Text style={styles.content}>{item}</Text>
					</HStack>
				))
			}
		</View>
	)
}

export default MenuComponent
const styles = StyleSheet.create({
	title: {
		color: systemColor(UIColor.black),
		marginRight: 10,
		fontSize: FontSize.h4,
		fontWeight: 'bold'
	},
	content: {
		color: systemColor(UIColor.black),
		fontSize: FontSize.h5,
		maxWidth: maxWidthActually * 0.6
	},
	dot: {
		color: systemColor(UIColor.accent),
		marginRight: 10,
		marginLeft: 10
	}
})