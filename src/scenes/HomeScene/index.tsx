import { Text, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native'
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
import HomeNews from './HomeNews'
import HomeMenu from './HomeMenu'
import HomeSchedule from './HomeSchedule'
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
			<ScrollView>
				<HomeMenu />
				<View
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
								fontWeight: '700',
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
									fontWeight: '500',
									color: systemColor(UIColor.accent),
									marginRight: 10

								}}
							>
								{getLabel('home.label_all')}
							</Text>
							<Icon
								name='angle-right'
								size={20}
								color={systemColor(UIColor.accent)}
							/>
						</HStack>
					</HStack>
					<HomeNews />
					<HomeNews />
					<HomeNews />
					<HomeNews />
					<HStack
						alignItems='center'
						justifyContent='space-between'
						marginTop={4}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: '700',
								color: systemColor(UIColor.black)
							}}
						>
							{getLabel('home.label_schedule')}
						</Text>
					</HStack>
					<HomeSchedule />
				</View>
			</ScrollView>
		</View>
	)
}

export default HomeScene