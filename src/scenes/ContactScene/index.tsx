import { Alert, StyleSheet, Text, TouchableOpacity, Linking, DeviceEventEmitter } from 'react-native'
import React, { useState } from 'react'
import { View, Button, HStack, VStack, Center } from 'native-base'
import { Icon } from '../../themes/Icons/IconCustom'
import { systemColor, UIColor } from '../../utils/colors'
import { FontSize } from '../../utils/fontSize'
import { getLabel } from '../../utils/commons'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../utils/sizes'
import { useNavigation } from '@react-navigation/core';
import Feather from 'react-native-vector-icons/Feather';
const Contact = (props:any) => {
	return (
		<Center
			padding={defaultPaddingHorizontal}
			backgroundColor={systemColor(UIColor.white)}
			marginBottom={2}
		>
			<HStack
				width={maxWidthActually - defaultPaddingHorizontal * 2}
				alignItems='center'
				justifyContent='space-between'
			>
				<VStack

					justifyContent={'space-between'}
					space={2}
				>
					<Text style={styles.title}>{props.name}</Text>
					<Text style={styles.position}>{props.position}</Text>
				</VStack>
				<HStack space={4} marginLeft={-100}>
					<TouchableOpacity
						onPress={()=> Linking.openURL(`tel:${props.phoneNumber}`)}
					>
						<Feather
							name='phone'
							size={24}
							color={systemColor(UIColor.accent)}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={()=> Linking.openURL(`mailto:${props.email}`)}
					>
						<Feather
							name='mail'
							size={24}
							color={systemColor(UIColor.accent)}
						/>
					</TouchableOpacity>
				</HStack>
			</HStack>
		</Center>
	)
}

const ContactScene = () => {
	const navigation = useNavigation();
	DeviceEventEmitter.emit('inContractScene', { message: "CONTACT"});
	return (
		<View>
			{/* Title */}
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
							{getLabel('bottom_tab.tab_contact')}
						</Text>
					</HStack>
				</HStack>
			</View>
			{/* Body */}
			<Contact 
				name='Ho??ng Minh Ch??u' 
				position='GVCN 2A3'
				phoneNumber='0915017718'
				email='nguyenducchidat@gmail.com'
			/>
			<Contact 
				name='L?? Tri???u V???'
				position='GVCN 2A3'
				phoneNumber='0915017718'
				email='nguyenducchidat@gmail.com'
			/>
			<Contact 
				name='L?? Th??? Qu???nh' 
				position='Monitor'
				phoneNumber='0915017718'
				email='nguyenducchidat@gmail.com'
			/>
			<Contact
				name='Ph??ng tuy???n sinh' 
				position='Tr?????ng Wellspring'
				phoneNumber='0915017718'
				email='nguyenducchidat@gmail.com'
			/>
			<Contact 
				name='Ph??ng k??? to??n' 
				position='Tr?????ng Wellspring'
				phoneNumber='0915017718'
				email='nguyenducchidat@gmail.com'
			/>
		</View>
	)
}

export default ContactScene
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black),
		width: maxWidthActually * 0.8,
		fontWeight: '700',
	},
	position: {
		fontSize: FontSize.h6,
		color: systemColor(UIColor.black4),
		width: maxWidthActually * 0.8,
	},

	not_break: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.accent)
	},
})