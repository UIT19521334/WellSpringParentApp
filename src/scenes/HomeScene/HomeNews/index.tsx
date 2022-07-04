import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack, VStack, View } from 'native-base'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, maxWidthActually } from '../../../utils/sizes'
import { systemColor, UIColor } from '../../../utils/colors'
import { getLabel } from '../../../utils/commons'
import { FontSize } from '../../../utils/fontSize'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeNews = () => {
	return (
		<TouchableOpacity>
			<HStack
				marginTop={5}
				alignItems='center'
				marginBottom={5}
			>
				<View
					borderWidth={1}
					borderRadius={1000}
					borderColor={systemColor(UIColor.black8)}
					padding={maxWidthActually * 0.03}
				>
					<FontAwesome
						name='newspaper-o'
						size={maxWidthActually * 0.06}
						color={systemColor(UIColor.accent)}

					/>
				</View>
				<VStack
					paddingLeft={defaultPaddingHorizontal}
				>
					<Text
						style={{
							fontSize: FontSize.h6,
							fontWeight: 'bold',
							color: systemColor(UIColor.black),
							maxWidth: maxWidthActually * 0.75
						}}
					>
						{getLabel('home.label_news_detail')}
					</Text>
					<HStack
						alignItems='center'
						marginTop={2}
					>
						<Icon
							name='calendar'
							size={maxWidthActually * 0.04}
							color={systemColor(UIColor.black4)}
						/>
						<Text
							style={{
								color: systemColor(UIColor.black4),
								fontSize: FontSize.h6,
								fontWeight: '300',
								marginLeft: 10
							}}
						>
							11/04/2021
						</Text>
					</HStack>
				</VStack>
			</HStack>
		</TouchableOpacity>
	)
}

export default HomeNews