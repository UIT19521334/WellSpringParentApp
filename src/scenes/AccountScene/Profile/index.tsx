import { ImageBackground, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { View, Button, HStack, Center, ScrollView } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'react-native-image-picker';
import { getLabel } from '../../../utils/commons'
const Profile = () => {
	const [image, setImage] = useState();
	const navigation = useNavigation();

	// image Picker
	const onpenGallery = async () => {
		const options = {
			saveToPhotos: true,
			mediaType: 'photo',
			maxHeight: 200,
			maxWidth: 200,
		}
		ImagePicker.launchImageLibrary(options, setImage);

	}

	return (
		<ImageBackground
			source={require('../../../assets/images/splash.jpg')}
			style={{
				flex: 1,
			}}
			imageStyle={{
				resizeMode: 'stretch'
			}}
		>
			<Icon
				onPress={() => navigation.goBack()}
				name='long-arrow-left'
				size={40}
				style={{
					position: 'absolute',
					top: 30,
					left: 20,
					color: systemColor(UIColor.white)
				}}
			/>
			<Center
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
				marginTop={headerAbsoluteHeight * 0.3}
			>
				{
					image ?
						<Image
							source={{ uri: image?.assets[0].uri }}
							style={{
								width: headerAbsoluteHeight * 0.7,
								height: headerAbsoluteHeight * 0.7,
								borderRadius: headerAbsoluteHeight * 0.7
							}}
						/>
						:
						<View
							backgroundColor={systemColor(UIColor.white)}
							borderRadius='full'
							height={headerAbsoluteHeight * 0.7}
							width={headerAbsoluteHeight * 0.7}
							alignItems='center'
							justifyContent='center'
						>
							<Icon
								name='user'
								size={36}
								color={systemColor(UIColor.accent)}
							/>
						</View>

				}
				<TouchableOpacity
					onPress={onpenGallery}
					style={{
						position: 'absolute',
						bottom: 0,
						right: maxWidthActually * .5 - headerAbsoluteHeight * 0.4
					}}
				>
					<View
						backgroundColor={systemColor(UIColor.white)}
						borderRadius='full'
						height={headerAbsoluteHeight * 0.24}
						width={headerAbsoluteHeight * 0.24}
						alignItems='center'
						justifyContent='center'
						shadow={'9'}
					>
						<Icon
							name='camera'
							size={16}
							color={systemColor(UIColor.accent)}
						/>
					</View>
				</TouchableOpacity>
			</Center>
			<ScrollView marginTop={6} backgroundColor={systemColor(UIColor.black9)} >
				<View
					backgroundColor={systemColor(UIColor.white)}
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					paddingBottom={6}
				>
					<Text style={styles.header}>{getLabel('profile.title_general_information')}</Text>

					<Text style={styles.title}>{getLabel('profile.label_fullname')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>Nguyễn Thị Minh Thùy</Text>

					<Text style={styles.title}>{getLabel('profile.label_date_of_birth')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>13/04/1998</Text>

					<Text style={styles.title}>{getLabel('profile.label_identity_card')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>025325265</Text>

					<Text style={styles.title}>{getLabel('profile.label_main_phone_number')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>038 899 6912</Text>

					<Text style={styles.title}>{getLabel('profile.label_other_phone_number')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>0868 372 282</Text>

					<Text style={styles.title}>{getLabel('register.placeholder_email')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>hoa.nguyen@gmail.com</Text>

				</View>
				<View
					backgroundColor={systemColor(UIColor.white)}
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					paddingBottom={6}
					marginTop={2}
				>
					<Text style={styles.header}>{getLabel('profile.title_permanent_address')}</Text>

					<Text style={styles.title}>{getLabel('register.placeholder_province')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>Thành phố Hồ Chí Minh</Text>

					<Text style={styles.title}>{getLabel('register.placeholder_town')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>Quận Thủ Đức</Text>

					<Text style={styles.title}>{getLabel('register.placeholder_address')}</Text>
					<Text style={[styles.title, { color: systemColor(UIColor.black) }]}>13 đường 37, phường Hiệp Bình Phước, TP Thủ Đức, TPHCM</Text>

				</View>
			</ScrollView>
		</ImageBackground>

	)
}

export default Profile
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black4),
		width: maxWidthActually * 0.8,
		marginTop: 16,
	},
	header: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black),
		fontWeight: 'bold',
		marginTop: 20,
		paddingBottom: 10,
		borderBottomColor: systemColor(UIColor.black8),
		borderBottomWidth: 1,
	},
})
