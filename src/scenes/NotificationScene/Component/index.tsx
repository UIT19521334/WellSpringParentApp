import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { View, HStack } from 'native-base';
import { defaultPaddingHorizontal, maxWidthActually } from '../../../utils/sizes';
import { systemColor, UIColor } from '../../../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontSize } from '../../../utils/fontSize';
const Component = (props: any) => {
	const data = props.data;
	return (
		<TouchableOpacity
				
		>
			<View
				marginTop={2}
				padding={defaultPaddingHorizontal}
				backgroundColor={systemColor(UIColor.white)}
			>
				<HStack
					alignItems='center'
					justifyContent='space-between'
				>
					<HStack
						alignItems='center'
					>
						<FontAwesome
							name='newspaper-o'
							size={maxWidthActually * 0.04}
							color={data.isRead ? systemColor(UIColor.black8) : systemColor(UIColor.accent)}
						/>
						<Text style={ data.isRead ? styles.title_Read : styles.title }>{data.title}</Text>
						{
							data.isRead ? undefined : <Text style={{color:'red', marginLeft: 4}} >●</Text>
						}
					</HStack>
					<Text style={data.isRead ? styles.datetime_Read :styles.datetime} >{data.dateTime}</Text>
				</HStack>
				<Text style={data.isRead ? styles.desc_Read : styles.desc} >{data.desc}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Component
const styles = StyleSheet.create({
	title: {
		color: systemColor(UIColor.black),
		marginLeft: 4,
		fontSize: FontSize.h5,
		fontWeight: '700'
	},
	title_Read: {
		color: systemColor(UIColor.black8),
		marginLeft: 4,
		fontSize: FontSize.h5,
		fontWeight: '700'
	},
	datetime: {
		color: systemColor(UIColor.black4),
		fontSize: FontSize.h7,
	},
	datetime_Read: {
		color: systemColor(UIColor.black8),
		fontSize: FontSize.h7,
	},
	desc: {
		maxWidth: maxWidthActually * 0.85,
		marginTop: 10,
		color: systemColor(UIColor.black),
		fontSize: FontSize.h5,
	},
	desc_Read: {
		maxWidth: maxWidthActually * 0.85,
		marginTop: 10,
		color: systemColor(UIColor.black8),
		fontSize: FontSize.h5,

	}
})