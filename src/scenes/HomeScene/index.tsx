import { Text, ImageBackground, Image, Alert } from 'react-native'
import {
	maxHeightActually,
	maxWidthActually,
	defaultPaddingHorizontal,
	avatarAbsoluteProfileHeight,
	headerAbsoluteHeight,
} from '../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button, ScrollView } from 'native-base'
import { FontSize } from '../../utils/fontSize'
import { systemColor, UIColor } from '../../utils/colors'
import { Icon } from '../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import Global from '../../Global'
import { getLabel } from '../../utils/commons';


const HomeScene = () => {

	const navigation = useNavigation()
	return (
		<View>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
			>
				<View
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					marginTop={headerAbsoluteHeight * 0.5}
				>
					<HStack
						space={2}
						alignItems='center'
					>
						<Button
							backgroundColor={systemColor(UIColor.white)}
							borderRadius={1000}
						>
							<Icon
								name='user'
								size={20}
								color={systemColor(UIColor.accent)}
								padding={5}
							/>
						</Button>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.white),
								fontWeight: '700'
							}}
						>
							{getLabel('home.label_hello', { name: 'chị Nguyễn Minh Thùy' })}
						</Text>
					</HStack>
				</View>
			</View>
			<View
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
				height={headerAbsoluteHeight *1.2}
				backgroundColor={systemColor(UIColor.white)}			
				
			>
				<HStack
					justifyContent='space-between'
					alignItems='center'
					paddingTop={headerAbsoluteHeight * 0.16}
				>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
					>
						<Button
							backgroundColor={systemColor(UIColor.brand)}
							borderRadius={12}
							padding={maxWidthActually * 0.028}
						>
							<Image source={require('../../assets/icons/menu1.png')}
								style={{
									height: maxWidthActually * 0.08,
									width: maxWidthActually * 0.08,
								}}
							/>
						</Button>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						<Button
							backgroundColor={systemColor(UIColor.brand1)}
							borderRadius={12}

							height={maxWidthActually * 0.136}
							width={maxWidthActually * 0.136}
						>
							<Image source={require('../../assets/icons/menu2.png')}
								style={{
									height: maxWidthActually * 0.08,
								}}
							/>
						</Button>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						<Button
							backgroundColor={systemColor(UIColor.brand2)}
							borderRadius={12}

							height={maxWidthActually * 0.136}
							width={maxWidthActually * 0.136}
						>
							<Image source={require('../../assets/icons/menu3.png')}
								style={{
									height: maxWidthActually * 0.08,
									width: maxWidthActually * 0.08,
								}}
							/>
						</Button>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						<Button
							backgroundColor={systemColor(UIColor.brand3)}
							borderRadius={12}

							height={maxWidthActually * 0.136}
							width={maxWidthActually * 0.136}
						>
							<Image source={require('../../assets/icons/menu4.png')}
								style={{
									height: maxWidthActually * 0.08,
									width: maxWidthActually * 0.08,
								}}
							/>
						</Button>
					</VStack>
				</HStack>
				<HStack
					justifyContent='space-between'
					alignItems='center'
					marginTop={headerAbsoluteHeight*0.04}
				>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
					>
						<Text
							style={{
								fontSize: FontSize.h6,
								textAlign:'center'
							}}
						>
							{getLabel('home.label_learning_outcomes')}
						</Text>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						
						<Text
							style={{
								fontSize: FontSize.h6,
								textAlign:'center'
							}}
						>
							{getLabel('home.label_leave')}
						</Text>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						
						<Text
							style={{
								fontSize: FontSize.h6,
								textAlign:'center'
							}}
						>
							{getLabel('home.label_attendance_bus')}
						</Text>
					</VStack>
					<VStack
						alignItems='center'
						width={maxWidthActually * 0.2}
						justifyContent='space-between'
					>
						
						<Text
							style={{
								fontSize: FontSize.h6,
								textAlign:'center'
							}}
						>
							{getLabel('home.label_menu')}
						</Text>
					</VStack>
				</HStack>
			</View>
			<ScrollView
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
				marginTop={2}
				backgroundColor={systemColor(UIColor.white)}
			>
				<HStack
					alignItems='center'
					justifyContent='space-between'
					marginTop={4}
				>
					<Text
						style={{
							fontSize: FontSize.h4,
							fontWeight:'700',
							color: systemColor(UIColor.black)
						}}
					>
						{getLabel('home.label_news')}
					</Text>
					<HStack
						alignItems='center'
					>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight:'500',
							color: systemColor(UIColor.accent),
							marginRight: 10
							
						}}
					>
						{getLabel('home.label_all')}
					</Text>
					<Icon 
						name='angle-right' 
						size={20} 
						color={ systemColor(UIColor.accent)}
					/>
					</HStack>
				</HStack>
				
			</ScrollView>
		</View>
	)
}

export default HomeScene