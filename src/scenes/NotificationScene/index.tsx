import {  DeviceEventEmitter, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { View, HStack, ScrollView } from 'native-base';
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../utils/sizes'
import { systemColor, UIColor } from '../../utils/colors';
import { Icon } from '../../themes/Icons/IconCustom';
import { FontSize } from '../../utils/fontSize';
import { getLabel } from '../../utils/commons';
import { useNavigation } from '@react-navigation/core';
import All from './All';
import Study from './Study';
import Service from './Service';
import Fee from './Fee';
import News from './News';
const NotificationScene = () => {

	DeviceEventEmitter.emit('countNotification', { amount: '9+' });

	const navigation = useNavigation();

	
	// notification amount
	const [all, setAll] = useState(2);

	const [study, setStudy] = useState(4);
	const [service, setService] = useState(4);
	const [fee, setFee] = useState(0);
	const [news, setNews] = useState(5);

	// notification position (focus) 
	const [position, setPosition] = useState(0);
	
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
						marginTop: headerAbsoluteHeight * 0.1,
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
							{getLabel('bottom_tab.tab_notification')}
						</Text>
					</HStack>
				</HStack>
				<ScrollView
					marginTop={headerAbsoluteHeight * 0.1}
					marginBottom={headerAbsoluteHeight*0.1}
					horizontal={true}
				>
					<TouchableOpacity 
						onPress={()=>setPosition(0)}
						style={position == 0 ? styles.btn_focus : styles.btn_unfocus}>
						<HStack alignItems='center' justifyContent='space-between' >
							<Text style={position == 0 ? styles.text_focus : styles.text_unfocus} >{getLabel('home.label_all')}</Text>
							{
								all > 0 ? 
								<Text style={styles.notification} >{all}+</Text>
								: undefined
							}
						</HStack>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>setPosition(1)}
						style={position == 1 ? styles.btn_focus : styles.btn_unfocus }>
						<HStack alignItems='center' justifyContent='space-between' >
							<Text style={position == 1 ? styles.text_focus : styles.text_unfocus} >{getLabel('home.label_learing')}</Text>
							{
								study > 0 ? 
								<Text style={styles.notification} >{study}</Text>
								: undefined
							}
						</HStack>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>setPosition(2)}
						style={position == 2 ? styles.btn_focus : styles.btn_unfocus}>
						<HStack alignItems='center' justifyContent='space-between' >
							<Text style={position == 2 ? styles.text_focus : styles.text_unfocus} >{getLabel('home.label_service')}</Text>
							{
								service > 0 ? 
								<Text style={styles.notification} >{service}</Text>
								: undefined
							}
						</HStack>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>setPosition(3)}
						style={position == 3 ? styles.btn_focus : styles.btn_unfocus}>
						<HStack alignItems='center' justifyContent='space-between' >
							<Text style={position == 3 ? styles.text_focus : styles.text_unfocus} >{getLabel('home.label_fee')}</Text>
							{
								fee > 0 ? 
								<Text style={styles.notification} >{fee}</Text>
								: undefined
							}
						</HStack>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>setPosition(4)}
						style={position == 4 ? styles.btn_focus : styles.btn_unfocus}>
						<HStack alignItems='center' justifyContent='space-between' >
							<Text style={position == 4 ? styles.text_focus : styles.text_unfocus} >{getLabel('home.label_news')}</Text>
							{
								news > 0 ? 
								<Text style={styles.notification} >{news}</Text>
								: undefined
							}
						</HStack>
					</TouchableOpacity>
				</ScrollView>
			</View>
			{/* Body */}
			{
				position == 0 ? <All setNotifi = {setAll} count = {all} /> : undefined
			}
			{
				position == 1 ? <Study/> : undefined
			}
			{
				position == 2 ? <Service/> : undefined
			}
			{
				position == 3 ? <Fee/> : undefined
			}
			{
				position == 4 ? <News/> : undefined
			}
		</View >
	)
}

export default NotificationScene
const styles = StyleSheet.create({
	btn_focus: {
		marginRight: 10,
		borderRadius: 20,
		backgroundColor: systemColor(UIColor.white),
		alignItems: 'center',
		justifyContent:'center'
	},
	btn_unfocus: {
		marginRight: 10,
		borderRadius: 20,
		backgroundColor: systemColor(UIColor.accent),
		alignItems: 'center',
		justifyContent:'center'
	},
	text_focus: {
		fontSize: FontSize.h6,
		color: systemColor(UIColor.accent),
		fontWeight: 'bold',
		padding: 8,
	},
	text_unfocus: {
		fontSize: FontSize.h6,
		color: systemColor(UIColor.white),
		fontWeight: 'bold',
		padding: 8,
	},
	notification:{
		
		marginRight: 8,
		backgroundColor: systemColor(UIColor.useful1),
		color:systemColor(UIColor.white),
		padding: 4,
		paddingLeft: 8,
		paddingRight: 8,
		fontSize: FontSize.h7,
		borderRadius: 30,
	}
})