import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Actionsheet, Button, Center, FormControl, HStack, Input, Modal, useDisclose, VStack } from 'native-base';
import { FontSize } from '../../../../utils/fontSize';
import { systemColor, UIColor } from '../../../../utils/colors';
import { defaultPaddingHorizontal, maxWidthActually } from '../../../../utils/sizes';
import { getLabel } from '../../../../utils/commons';
import { Icon } from '../../../../themes/Icons/IconCustom';

const Lessondetail = (props: any) => {
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
					>Thứ 3 - Ngày 22/6/2021</Text>
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
					>{getLabel('home.label_time2')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>7:00 - 07:45</Text>
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
					>{getLabel('home.label_teacher')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>Cô Nguyễn Thị Thu Thủy, thầy Đặng Tô Thành Huy
					</Text>
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
					>{getLabel('home.label_content')}</Text>
					<VStack>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black),
								fontWeight:'bold',
								width: maxWidthActually * 0.65,
							}}
						>Bài 3: Từ ghép, Từ láy</Text>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black2),
								width: maxWidthActually * 0.65,
								marginTop:5,
							}}
						>Sử dụng từ ghép và từ láy trong tập làm văn</Text>
					</VStack>
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
					>{getLabel('home.label_test')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.useful),
							width: maxWidthActually * 0.65,
						}}
					>Kiểm tra 15 phút</Text>
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
					>{getLabel('home.label_note')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black2),
							width: maxWidthActually * 0.65,
						}}
					>
					Nhắc học sinh làm bài tập</Text>
				</HStack>
				<Button
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					borderRadius={20}
					marginTop={10}
					marginBottom={5}
					onPress={props.handleClose}
				>
					<Text style={{fontSize: FontSize.h4, color: systemColor(UIColor.white)}} >
						Xong
					</Text>
				</Button>
			</Actionsheet.Content>
		</Actionsheet>
	</>;
}

export default Lessondetail