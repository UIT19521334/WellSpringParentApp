import { Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { View, HStack, Center, ScrollView } from 'native-base'
import { getLabel } from '../../../utils/commons'
import { systemColor, UIColor } from '../../../utils/colors'
import { FontSize } from '../../../utils/fontSize'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core'



const AboutUs = () => {
	const navigation = useNavigation();
	return (
		<View flex={1} backgroundColor={systemColor(UIColor.white)}>
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
							{getLabel('common.label_about_us')}
						</Text>
					</HStack>
				</HStack>
			</View>
			{/* Body */}
			<Center
				borderBottomWidth={1}
				borderBottomColor={systemColor(UIColor.black8)}
			>
				<Image source={require('../../../assets/images/logo.png')} 
					style={{
						resizeMode:'contain',
						height: headerAbsoluteHeight * 1.2
					}}
				/>
			</Center>
			<ScrollView
				
				padding = {defaultPaddingHorizontal}
			>
				<Text style={styles.title}>{getLabel('common.label_create_by')}</Text>
				<Text style={styles.content}>Trường Song ngữ Liên cấp Wellspring</Text>
			
				<Text style={styles.title}>{getLabel('common.label_address')}</Text>
				<Text style={[styles.content,{color: systemColor(UIColor.accent)}]}>Số 95, phố Ái Mộ, Phường Bồ Đề, Quận Long Biên, Hà Nội</Text>
			
				<Text style={styles.title}>{getLabel('common.label_website')}</Text>
				<TouchableOpacity
					onPress={()=>Linking.openURL('https://wellspring.edu.vn/')}
				>
					<Text 
						style={[styles.content,{color: systemColor(UIColor.accent)}]}>
							https://wellspring.edu.vn/
					</Text>
				</TouchableOpacity>
			
				<Text style={styles.title}>{getLabel('common.label_call_center')}</Text>
				<Text style={[styles.content,{color: systemColor(UIColor.accent)}]}>09 73 75 9229</Text>
			
				<Text style={styles.title}>{getLabel('common.label_version')}</Text>
				<Text style={styles.content}>v1.0</Text>
				<View height='40'/>
			</ScrollView>
		</View>
	)
}

export default AboutUs
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black4),
		width: maxWidthActually * 0.8,
		marginTop: 16,
	},
	content :{
		fontSize: FontSize.h4,
		color: systemColor(UIColor.black),
		width: maxWidthActually * 0.88,
		marginTop: 8,
	}
})