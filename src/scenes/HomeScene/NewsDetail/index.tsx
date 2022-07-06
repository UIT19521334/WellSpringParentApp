import { FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { View, HStack, Button, ScrollView } from 'native-base';
import { getLabel } from '../../../utils/commons';
import { systemColor, UIColor } from '../../../utils/colors';
import { FontSize } from '../../../utils/fontSize';
import { Icon } from '../../../themes/Icons/IconCustom';
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually } from '../../../utils/sizes';
import { useNavigation } from '@react-navigation/core';
import Entypo from 'react-native-vector-icons/Entypo';

const NewsDetail = () => {
	const navigation = useNavigation();
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
			<ScrollView
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
				backgroundColor={systemColor(UIColor.white)}
			>
				<Text
					style={{
						fontSize: FontSize.h4,
						color: systemColor(UIColor.black),
						fontWeight: 'bold',
						textAlign: 'center',
						marginTop: 20
					}}
				>
					Thông báo chuẩn bị năm học 2018-2019
				</Text>
				<Text
					style={{
						fontSize: FontSize.h5,
						color: systemColor(UIColor.black),
						textAlign: 'left',
						marginTop: 20
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla harum assumenda impedit est iste officiis. Ex, asperiores? Modi aliquid itaque explicabo repudiandae doloribus quasi sit rerum nesciunt laborum ea!
				</Text>
				<Text
					style={{
						fontSize: FontSize.h5,
						color: systemColor(UIColor.black),
						textAlign: 'left',
						marginTop: 5
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla harum assumenda impedit est iste officiis. Ex, asperiores? Modi aliquid itaque explicabo repudiandae doloribus quasi sit rerum nesciunt laborum ea!
				</Text>
				<Text
					style={{
						fontSize: FontSize.h5,
						color: systemColor(UIColor.black),
						textAlign: 'left',
						marginTop: 5
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla harum assumenda impedit est iste officiis. Ex, asperiores? Modi aliquid itaque explicabo repudiandae doloribus quasi sit rerum nesciunt laborum ea!
				</Text>
				<Text
					style={{
						fontSize: FontSize.h5,
						color: systemColor(UIColor.black),
						textAlign: 'left',
						marginTop: 5
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla harum assumenda impedit est iste officiis. Ex, asperiores? Modi aliquid itaque explicabo repudiandae doloribus quasi sit rerum nesciunt laborum ea!
				</Text>
				<Text
					style={{
						fontSize: FontSize.h5,
						color: systemColor(UIColor.black),
						textAlign: 'left',
						marginTop: 5
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla harum assumenda impedit est iste officiis. Ex, asperiores? Modi aliquid itaque explicabo repudiandae doloribus quasi sit rerum nesciunt laborum ea!
				</Text>
				<HStack
					alignItems='center'
					space={2}
				>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.black),
							fontWeight: 'bold',
							textAlign: 'left',
							marginTop: 5
						}}
					>
						File đính kèm
					</Text>
					<Entypo name='attachment' color={systemColor(UIColor.black)} size={20} />
				</HStack>
				<TouchableOpacity>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.accent3),
							textAlign: 'left',
							marginTop: 5
						}}
					>
						K1_KDHC 2.pdf
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text
						style={{
							fontSize: FontSize.h5,
							color: systemColor(UIColor.accent3),
							textAlign: 'left',
							marginTop: 5
						}}
					>
						K1_KDHC 3.pdf
					</Text>
				</TouchableOpacity>
				<View height={maxHeightActually * 0.28} />
			</ScrollView>
		</View>
	)
}

export default NewsDetail