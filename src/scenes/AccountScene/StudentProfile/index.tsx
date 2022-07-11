import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { View, HStack } from 'native-base'
import { systemColor, UIColor } from '../../../utils/colors'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core';
import { Icon } from '../../../themes/Icons/IconCustom'
import { FontSize } from '../../../utils/fontSize'
import { getLabel } from '../../../utils/commons'

const Student = (props: any) => {
	return (
		<HStack
			backgroundColor={systemColor(UIColor.white)}
			padding={defaultPaddingHorizontal}
			alignItems='center'

		>
			<View
				backgroundColor={systemColor(UIColor.white)}
				borderRadius='full'
				borderWidth={1}
				borderColor={systemColor(UIColor.black8)}
				shadow={"4"}
				height={headerAbsoluteHeight * 0.5}
				width={headerAbsoluteHeight * 0.5}
				alignItems='center'
				justifyContent='center'
			>
				<Icon
					name='user'
					size={24}
					color={systemColor(UIColor.accent)}
				/>
			</View>
			<View
				marginLeft={6}
			>
				<Text style={styles.header} >{props.name}</Text>
				<Text style={styles.title}>{getLabel('profile.label_student_id')}: {props.id}</Text>
				<Text style={styles.title}>{getLabel('profile.label_date_of_birth')}: {props.birthday}</Text>
				<Text style={styles.title}>{getLabel('profile.label_student_sex')}: {props.sex}</Text>
				<Text style={styles.title}>{getLabel('profile.label_student_class')}: {props.class}</Text>
				<Text style={styles.title}>{getLabel('profile.label_student_school')}: {props.school}</Text>
			</View>
		</HStack>
	)
}

const StudentProfile = () => {
	const navigation = useNavigation();
	return (
		<View>
			{/* Header title */}
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					alignItems='center'
					style={{
						marginTop: headerAbsoluteHeight * 0.4,
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
					>
						<Icon
							name='long-arrow-left'
							size={40}
							color={systemColor(UIColor.white)}
						/>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: FontSize.h3,
							fontWeight: 'bold',
							marginLeft: 10,
							color: systemColor(UIColor.white)
						}}
					>
						{getLabel('student.label_student_info')}
					</Text>
				</HStack>
			</View>

			{/* Body */}
			<Student 
				name='Nguyễn Phương Anh'
				id = 'WS19002930'
				birthday='02/11/2014'
				sex = 'Nữ'
				class = '2A3'
				school = 'Trường Tiểu học Wellspring'
			/>
			<View height={2} />
			<Student 
				name='Nguyễn Thành Phúc'
				id = 'WS19001107'
				birthday='13/04/2007'
				sex = 'Nam'
				class = '9A3'
				school = 'Trường THCS Wellspring'
			/>
		</View>
	)
}

export default StudentProfile
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black4),
		width: maxWidthActually * 0.8,
		marginTop: 16,
	},
	header: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black),
		fontWeight: 'bold',
	},
})