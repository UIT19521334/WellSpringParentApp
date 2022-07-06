import { FlatList, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { View, HStack, Button, ScrollView } from 'native-base';
import { getLabel } from '../../../utils/commons';
import { systemColor, UIColor } from '../../../utils/colors';
import { FontSize } from '../../../utils/fontSize';
import { Icon } from '../../../themes/Icons/IconCustom';
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually } from '../../../utils/sizes';
import { useNavigation } from '@react-navigation/core';
import HomeNews from '../HomeNews';

const ListNew = () => {
	const navigation = useNavigation();
	const [allRead, setAllRead] = useState<true| false>(false);
	console.log('allread',allRead);
	return (
		<View>
			
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
			>
				<HStack
					alignItems='center'
					style={{
						position: 'absolute',
						top: 30,
						left: 20,
					}}
				>
					<Icon
						onPress={() => navigation.goBack()}
						name='long-arrow-left'
						size={40}
						color={systemColor(UIColor.white)}
					/>
					<Text
						style={{
							fontSize: FontSize.h3,
							fontWeight: 'bold',
							marginLeft: 10,
							color: systemColor(UIColor.white)
						}}
					>
						{getLabel('home.label_news')}
					</Text>
				</HStack>
			</View>
			<TouchableOpacity
				onPress={()=> setAllRead(true)}
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
			<ScrollView>
				<View
					style={{
						backgroundColor: systemColor(UIColor.white),
						marginTop: 10,
						paddingLeft: defaultPaddingHorizontal,
						paddingRight: defaultPaddingHorizontal,
					}}
				>
					<HomeNews read = {allRead}/>
				</View>
				<View
					style={{
						backgroundColor: systemColor(UIColor.white),
						marginTop: 10,
						paddingLeft: defaultPaddingHorizontal,
						paddingRight: defaultPaddingHorizontal,
					}}
				>
					<HomeNews read = {allRead}/>
				</View>
				<View
					style={{
						backgroundColor: systemColor(UIColor.white),
						marginTop: 10,
						paddingLeft: defaultPaddingHorizontal,
						paddingRight: defaultPaddingHorizontal,
					}}
				>
					<HomeNews read = {allRead}/>
				</View>
				<View
					style={{
						backgroundColor: systemColor(UIColor.white),
						marginTop: 10,
						paddingLeft: defaultPaddingHorizontal,
						paddingRight: defaultPaddingHorizontal,
					}}
				>
					<HomeNews read = {allRead}/>
				</View>
				<View height={maxHeightActually*0.28}/>
			</ScrollView>
		</View>
	)
}

export default ListNew