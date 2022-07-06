import { Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, Actionsheet, Button, HStack, useDisclose, VStack } from 'native-base';
import { defaultPaddingHorizontal, maxWidthActually } from '../../../utils/sizes';
import { systemColor, UIColor } from '../../../utils/colors';
import { FontSize } from '../../../utils/fontSize';
import { getLabel } from '../../../utils/commons';
import { Icon } from '../../../themes/Icons/IconCustom';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const ChangeStudent = (props: any) => {
	const {
		isOpen,
		onOpen,
		onClose
	} = useDisclose();
	return <>
		<Actionsheet isOpen={props.isShow} onClose={props.handleClose}>
			<Actionsheet.Content>
				<HStack
					alignItems='center'
					justifyContent='space-between'
					width={maxWidthActually}
					paddingBottom={5}
					borderBottomWidth={1}
					borderBottomColor={systemColor(UIColor.black6)}
				>
					<Text
						style={{
							fontSize: FontSize.h4,
							fontWeight: 'bold',
							color: systemColor(UIColor.black),
							paddingLeft: defaultPaddingHorizontal
						}}
					>{props.title}</Text>
					<TouchableOpacity
						onPress={props.handleClose}
						style={{ paddingRight: defaultPaddingHorizontal }}
					>
						<Icon
							name='times'
							size={28}
							color={systemColor(UIColor.black)}
						/>
					</TouchableOpacity>
				</HStack>
				<HStack
					alignItems='flex-start'
					justifyContent='space-between'
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					paddingTop={4}
				>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>{getLabel('student.label_watch_student_info')}</Text>
				</HStack>
				<TouchableOpacity>
				<HStack
					marginTop={5}
					alignItems='center'
					
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					padding={4}
					borderWidth={1}
					borderColor={systemColor(UIColor.black8)}
					borderRadius={10}
				>
					<View
						width={12}
						height={12}
						justifyContent='center'
						alignItems='center'
						borderWidth={1.2}
						borderColor={systemColor(UIColor.black8)}
						borderRadius='full'
					>
						<FontAwesome5
							name='user-graduate'
							size={28}
							color={systemColor(UIColor.accent)}
						/>
					</View>
					<VStack
						justifyContent='space-between'
						space={2}
						marginLeft={3}
					>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black2),
								width: maxWidthActually * 0.65,
								fontWeight:'bold'
							}}
						>Nguyễn Phương Anh - 2A3</Text>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black2),
								width: maxWidthActually * 0.7,
							}}
						>{getLabel('student.label_school')} Trường Tiểu học Wellspring</Text>
					</VStack>
				</HStack>
				</TouchableOpacity>
				<TouchableOpacity>
				<HStack
					marginTop={5}
					alignItems='center'
					marginBottom={8}
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					padding={4}
					borderWidth={1}
					borderColor={systemColor(UIColor.black8)}
					borderRadius={10}
				>
					<View
						width={12}
						height={12}
						justifyContent='center'
						alignItems='center'
						borderWidth={1.2}
						borderColor={systemColor(UIColor.black8)}
						borderRadius='full'
					>
						<FontAwesome5
							name='user-graduate'
							size={28}
							color={systemColor(UIColor.accent)}
						/>
					</View>
					<VStack
						justifyContent='space-between'
						space={2}
						marginLeft={3}
					>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black2),
								width: maxWidthActually * 0.65,
								fontWeight:'bold'
							}}
						>Nguyễn Thành Phúc - 9A3</Text>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black2),
								width: maxWidthActually * 0.7,
							}}
						>{getLabel('student.label_school')} Trường THCS Wellspring</Text>
					</VStack>
				</HStack>
				</TouchableOpacity>
			</Actionsheet.Content>
		</Actionsheet>
	</>;
}

export default ChangeStudent