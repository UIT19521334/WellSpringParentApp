import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Center } from 'native-base'
import { systemColor, UIColor } from '../../../utils/colors'
import { maxWidthActually } from '../../../utils/sizes'
import { FontSize } from '../../../utils/fontSize'
const LearningProgram = (props: any) => {

	return (
		<TouchableOpacity>
			<Center
				backgroundColor={systemColor(UIColor.white)}
				padding={2}
				borderRadius='xl'
				borderWidth={1}
				borderColor={systemColor(UIColor.black8)}
				marginTop={2}
				width={maxWidthActually * 0.45}
			>
				<View
					padding={3}
					backgroundColor={props.type ? systemColor(UIColor.accent8) : systemColor(UIColor.useful4)}
					borderRadius='full'
				>
					<AntDesign name='profile' size={30} color={props.type ? systemColor(UIColor.accent) : systemColor(UIColor.useful2)} />
				</View>
				{
					props.type ? <Text style={styles.text_focus} > Chương trình Việt Nam </Text> :
					<Text style={styles.text_unfocus} > Chương trình Quốc Tế </Text>
				}
				
				<Text style={styles.text_} > Bảng điểm {props.semester} </Text>
			</Center>
		</TouchableOpacity>
	)
}

export default LearningProgram
const styles = StyleSheet.create({
	btn_focus: {
		borderRadius: 20,
		width: maxWidthActually * 0.45,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: systemColor(UIColor.white),
		alignItems: 'center'
	},
	btn_unfocus: {
		borderRadius: 20,
		width: maxWidthActually * 0.45,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: systemColor(UIColor.accent),
		alignItems: 'center'
	},
	text_focus: {
		marginTop: 10,
		fontSize: FontSize.h65,
		color: systemColor(UIColor.accent),
		fontWeight: 'bold',
	},
	text_: {
		marginTop: 5,
		fontSize: FontSize.h65,
		color: systemColor(UIColor.black),
	},
	text_unfocus: {
		marginTop: 10,
		fontSize: FontSize.h65,
		color: systemColor(UIColor.useful2),
		fontWeight: 'bold',
	}
})