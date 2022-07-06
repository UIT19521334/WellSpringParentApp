import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HStack, VStack, View } from 'native-base'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, maxWidthActually } from '../../../utils/sizes'
import { systemColor, UIColor } from '../../../utils/colors'
import { getLabel } from '../../../utils/commons'
import { FontSize } from '../../../utils/fontSize'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core'

const HomeNews = (props : any) => {
	const navigation = useNavigation();
	const [isNewRead, setNewIsRead] = useState<true | false>(false);
	const [isRead, setIsRead] = useState<true | false>(false);
	
	//handlePress
	const handlePress = () =>{
		setIsRead(true);
		navigation.navigate('NewsDetail')
	}
	return (
		<TouchableOpacity
			onPress={()=>handlePress()}
		>
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
						color={isRead ? systemColor(UIColor.black8) : systemColor(UIColor.accent)}

					/>
				</View>
				<VStack
					paddingLeft={defaultPaddingHorizontal}
				>
					<Text
						style={isRead  ? styles.textIsRead : styles.textIsNotRead}
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
							color={isRead  ? systemColor(UIColor.black8) : systemColor(UIColor.black4)}
						/>
						<Text
							style={isRead  ? styles.dateIsRead : styles.dateIsNotRead}
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
const styles = StyleSheet.create({
	textIsRead: {
		fontSize: FontSize.h6,
		fontWeight: 'bold',
		color: systemColor(UIColor.black8),
		maxWidth: maxWidthActually * 0.75
	},
	textIsNotRead: {
		fontSize: FontSize.h6,
		fontWeight: 'bold',
		color: systemColor(UIColor.black),
		maxWidth: maxWidthActually * 0.75
	},
	dateIsRead: {
		color: systemColor(UIColor.black8),
		fontSize: FontSize.h6,
		fontWeight: '300',
		marginLeft: 10
	},
	dateIsNotRead: {
		color: systemColor(UIColor.black4),
		fontSize: FontSize.h6,
		fontWeight: '300',
		marginLeft: 10
	},
})