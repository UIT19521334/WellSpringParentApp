import { StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { View, HStack, ScrollView, Input, VStack, Select, CheckIcon, Button } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { getLabel } from '../../../utils/commons'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, HeightDevice, maxHeightActually, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import Global from '../../../Global'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'react-native-image-picker';
const OnleaveDetail = () => {
	const navigation = useNavigation();
	const [dateStart, setdateStart] = useState<Date>(new Date);
	const [dateEnd, setdateEnd] = useState<Date>(new Date);
	return (
		<View
			backgroundColor={systemColor(UIColor.white)}
			flex={1}
		>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					alignItems='center'
					justifyContent='space-between'

					style={{
						marginTop: headerAbsoluteHeight * 0.4,
					}}
				>
					<HStack	alignItems='center'	>
						<TouchableOpacity	onPress={() => navigation.goBack()}>
							<Icon
								name='long-arrow-left'
								size={40}
								color={systemColor(UIColor.white)}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: FontSize.h3,
								fontWeight: 'bold',
								marginLeft: 10,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('onleave.title_onleave_detail')}
						</Text>
					</HStack>
				</HStack>
			</View>
			<ScrollView

				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_student')}</Text>
				<Text style={[styles.titlle, { marginTop: 16, color: systemColor(UIColor.black), fontWeight:'700' }]}>Nguyễn Phương Anh -  2A3</Text>
				
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_time')}</Text>
				<Text style={[styles.titlle, { marginTop: 16, color: systemColor(UIColor.black) }]}>{Global.formatDate(dateStart)} - {Global.formatDate(dateStart)}</Text>
				
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_lesson')}</Text>
				<Text style={[styles.titlle, { marginTop: 16, color: systemColor(UIColor.black) }]}>Tiết 1, Tiết 2, Tiết 3</Text>
				
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_reason')}</Text>
				<Text style={[styles.titlle, { marginTop: 16, color: systemColor(UIColor.black) }]}>Dịch covid</Text>

				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_feedback')}</Text>
				<Text style={[styles.titlle, { marginTop: 16, color: systemColor(UIColor.black) }]}>Bổ sung thêm các giấy tờ xét nghiệm</Text>

				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_attach')}</Text>
				<HStack	marginTop={4}>
					<View>
						<Image source={require('../../../assets/images/thua_ngai.jpg')}
							style={{
								width: maxWidthActually * 0.2,
								resizeMode: 'contain',
								borderRadius: 16,
								height: maxWidthActually * 0.2
							}}
						/>

					</View>
				</HStack>
			</ScrollView>
		</View>
	)
}

export default OnleaveDetail
const styles = StyleSheet.create({
	titlle: {
		color: systemColor(UIColor.black3),
		fontSize: FontSize.h5,
	}
})