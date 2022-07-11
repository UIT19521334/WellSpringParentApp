import {  StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { View, HStack, Switch } from 'native-base'
import { getLabel } from '../../../utils/commons'
import { systemColor, UIColor } from '../../../utils/colors'
import { FontSize } from '../../../utils/fontSize'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import { Icon } from '../../../themes/Icons/IconCustom'

const Setting =(props: any)=>{
	return(
		<View
			padding={defaultPaddingHorizontal}
			backgroundColor={systemColor(UIColor.white)}
			marginBottom={2}
		>
			<HStack 
				alignItems='center' 
				justifyContent='space-between'
			>
				<Text style={styles.title}>{props.content}</Text>
				<Switch colorScheme='primary' />
			</HStack>
		</View>
	)
}

const NotifiSetting = () => {
	const navigation = useNavigation();
	return (
		<View>
			{/* Header Title */}
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					justifyContent='space-between'
					alignItems='center'
					style={{
						marginTop: headerAbsoluteHeight * 0.4,
					}}
				>
					<HStack
						alignItems='center'

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
								fontSize: FontSize.h4,
								fontWeight: 'bold',
								marginLeft: 10,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('notification.title_notification_setting')}
						</Text>
					</HStack>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('notification.btn_save')}
						</Text>
					</TouchableOpacity>
				</HStack>
			</View>
			{/* Body */}
			<Setting content={getLabel('notification.label_accept_all')} />
			<Setting content={getLabel('notification.label_accept_with_study')} />
			<Setting content={getLabel('notification.label_accept_with_service')} />
			<Setting content={getLabel('notification.label_accept_with_fee')} />
			<Setting content={getLabel('notification.label_accept_with_news')} />
		</View>
	)
}

export default NotifiSetting
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black1),
		width: maxWidthActually * 0.8,
	}
})