import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultPaddingHorizontal } from '../../../utils/sizes'
import { systemColor, UIColor } from '../../../utils/colors'
import { FontSize } from '../../../utils/fontSize'
import { getLabel } from '../../../utils/commons'
import Component from '../Component'
import DATA from '../../../assets/json/notification.json';
const Study = (props: any) => {
	// count
	let amountNotifi = DATA.length;
	const handleIsRead = () =>{
		amountNotifi --;
		props.setNotifi(amountNotifi);
		console.log('voday?');
	}

	// Check all read;
	const [allRead, setallRead] = useState(false);
	const handleSetAllRead = () =>{
		setallRead(true);
		props.setNotifi(0);
	}
	return (
		<View>
			<TouchableOpacity
				onPress={handleSetAllRead}
				style={{
					padding: defaultPaddingHorizontal,
					backgroundColor: systemColor(UIColor.white)
				}}
			>
				<Text
					style={{
						color: systemColor(UIColor.accent),
						fontSize: FontSize.h5,
						fontWeight: '700'
					}}
				>
					{getLabel('news.btn_check_all')}
				</Text>
			</TouchableOpacity>
			<ScrollView >
				{
					DATA.map((item: any,index: any)=>
						<Component allRead={allRead} data={item} key={index} handleIsRead={handleIsRead} />
					)
				}
				<View style={{height: 420}}/>
			</ScrollView>
		</View>
	)
}

export default Study