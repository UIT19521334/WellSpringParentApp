import { Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, Actionsheet, Button, Center, FormControl, HStack, Input, Modal, useDisclose, VStack } from 'native-base';
import { FontSize } from '../../../../utils/fontSize';
import { systemColor, UIColor } from '../../../../utils/colors';
import { defaultPaddingHorizontal, maxWidthActually } from '../../../../utils/sizes';
import { getLabel } from '../../../../utils/commons';
import { Icon } from '../../../../themes/Icons/IconCustom';

const AttendanceModel = (props: any) => {
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
							color: systemColor(UIColor.black5),
						}}
					>{getLabel('home.label_time')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>04/07/2022 - 7:30</Text>
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
							color: systemColor(UIColor.black5),
						}}
					>{getLabel('bus.btn_attendance')}:</Text>
					{
						props.attend ?
							<View width={maxWidthActually * 0.65}>
								<Text
									style={{
										fontSize: FontSize.h5,
										color: systemColor(UIColor.accent),
										fontWeight: 'bold',
										alignSelf: 'flex-start',
										padding: 5,
										paddingLeft: 16,
										paddingRight: 16,
										textAlign: 'center',
										backgroundColor: systemColor(UIColor.accent8),
										borderRadius: 20,
									}}
								>{getLabel('bus.label_attend')}</Text>
							</View>
							:
							<View width={maxWidthActually * 0.65}>
								<Text
									style={{
										fontSize: FontSize.h5,
										color: systemColor(UIColor.useful2),
										fontWeight: 'bold',
										alignSelf: 'flex-start',
										padding: 5,
										paddingLeft: 16,
										paddingRight: 16,
										textAlign: 'center',
										backgroundColor: systemColor(UIColor.useful4),
										borderRadius: 20,
									}}
								>{getLabel('bus.label_unattend')}</Text>
							</View>
					}
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
							color: systemColor(UIColor.black5),
						}}
					>{getLabel('bus.label_reason')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>	{getLabel('bus.label_reason_detail')}
					</Text>
				</HStack>
				<Button
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					borderRadius={20}
					marginTop={10}
					marginBottom={5}
					onPress={props.handleClose}
				>
					<Text style={{ fontSize: FontSize.h4, color: systemColor(UIColor.white) }} >
						Xong
					</Text>
				</Button>
			</Actionsheet.Content>
		</Actionsheet>
	</>;
}

export default AttendanceModel