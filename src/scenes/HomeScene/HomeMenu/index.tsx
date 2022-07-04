import {  Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { View, HStack, VStack } from 'native-base'
import { getLabel } from '../../../utils/commons'
import { FontSize } from '../../../utils/fontSize'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'
import { systemColor, UIColor } from '../../../utils/colors'

const HomeMenu = () => {
	return (
		<View
			paddingLeft={defaultPaddingHorizontal}
			paddingRight={defaultPaddingHorizontal}
			height={headerAbsoluteHeight * 1.2}
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
					<TouchableOpacity
						style={{
							backgroundColor: systemColor(UIColor.brand),
							borderRadius: 12,
							padding: maxWidthActually * 0.028
						}}

					>
						<Image source={require('../../../assets/icons/menu1.png')}
							style={{
								height: maxWidthActually * 0.08,
								width: maxWidthActually * 0.08,
							}}
						/>
					</TouchableOpacity>
				</VStack>
				<VStack
					alignItems='center'
					width={maxWidthActually * 0.2}
					justifyContent='space-between'
				>
					<TouchableOpacity
						style={{
							backgroundColor: systemColor(UIColor.brand1),
							borderRadius: 12,
							padding: maxWidthActually * 0.028,
							height: maxWidthActually * 0.136,
							width: maxWidthActually * 0.136,
							alignItems: 'center'
						}}

					>
						<Image source={require('../../../assets/icons/menu2.png')}
							style={{
								height: maxWidthActually * 0.08,
							}}
						/>
					</TouchableOpacity>
				</VStack>
				<VStack
					alignItems='center'
					width={maxWidthActually * 0.2}
					justifyContent='space-between'
				>
					<TouchableOpacity
						style={{
							backgroundColor: systemColor(UIColor.brand2),
							borderRadius: 12,
							padding: maxWidthActually * 0.028,
							height: maxWidthActually * 0.136,
							width: maxWidthActually * 0.136,
							alignItems: 'center'
						}}

					>
						<Image source={require('../../../assets/icons/menu3.png')}
							style={{
								height: maxWidthActually * 0.08,
								width: maxWidthActually * 0.08,
							}}
						/>
					</TouchableOpacity>
				</VStack>
				<VStack
					alignItems='center'
					width={maxWidthActually * 0.2}
					justifyContent='space-between'
				>
					<TouchableOpacity
						style={{
							backgroundColor: systemColor(UIColor.brand3),
							borderRadius: 12,
							padding: maxWidthActually * 0.028,
							height: maxWidthActually * 0.136,
							width: maxWidthActually * 0.136,
							alignItems: 'center'
						}}

					>
						<Image source={require('../../../assets/icons/menu4.png')}
							style={{
								height: maxWidthActually * 0.08,
								width: maxWidthActually * 0.08,
							}}
						/>
					</TouchableOpacity>
				</VStack>
			</HStack>
			<HStack
				justifyContent='space-between'
				alignItems='center'
				marginTop={headerAbsoluteHeight * 0.04}
			>
				<VStack
					alignItems='center'
					width={maxWidthActually * 0.2}
				>
					<Text
						style={{
							fontSize: FontSize.h6,
							textAlign: 'center'
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
							textAlign: 'center'
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
							textAlign: 'center'
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
							textAlign: 'center'
						}}
					>
						{getLabel('home.label_menu')}
					</Text>
				</VStack>
			</HStack>
		</View>
	)
}

export default HomeMenu