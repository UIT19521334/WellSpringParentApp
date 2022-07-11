import { View, Text, TouchableOpacity, FlatList ,ScrollView} from 'react-native';
import React from 'react';
import { defaultPaddingHorizontal } from '../../../utils/sizes';
import { systemColor, UIColor } from '../../../utils/colors';
import { FontSize } from '../../../utils/fontSize';
import { getLabel } from '../../../utils/commons';
import DATA from '../../../assets/json/notification.json';
import Component from '../Component';

const All = () => {
	return (
		<View>
			<TouchableOpacity
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
						<Component data={item} key={index} />
					)
				}
				<View style={{height: 420}}/>
			</ScrollView>
		</View>
	)
}

export default All