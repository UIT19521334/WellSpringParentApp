import { Text, ImageBackground, Image, Alert } from 'react-native'
import { 
	maxHeightActually, 
	maxWidthActually, 
	defaultPaddingHorizontal, 
	avatarAbsoluteProfileHeight 
} from '../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base';
import { FontSize } from '../../utils/fontSize';
import { systemColor, UIColor } from '../../utils/colors';
import { Icon } from '../../themes/Icons/IconCustom';
import React, { useState } from 'react';
import * as userData from '../../assets/json/user.json';
import { getLabel } from '../../utils/commons';
import { useNavigation } from '@react-navigation/core';

const ForgetPasswordScene = ({ }) => {

	const navigation = useNavigation()

	// check login information
	const [phoneNumber, setPhoneNumber] = useState<String|null>('')

	// handle login
	const handleLogin = () => {
		if (!phoneNumber) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.phone_number_empty_msg'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (phoneNumber != userData[0].phonenumber){
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.phone_number_invalid_msg'), 
				[{ text: "OK" },]
			);
			return ;
		}
		Alert.alert(
			getLabel('common.title_modal_notification_setting'), 
			getLabel('forgot_password.title_notification_sent_phone_number'), 
			[{ text: "OK" },]
		);
		navigation.navigate('ForgetOTP');
	};

	return (
		<ImageBackground
			source={require('../../assets/images/splash.jpg')}
			style={{
				position: 'absolute',
				alignItems: 'center',
				left: 0,
				top: 0,
			}}
		>
			
				<Icon
					onPress = {()=> navigation.navigate('LoginScene')}
					name='long-arrow-left'
					size={40}
					style={{
						position: 'absolute',
						top: 30,
						left: 20,
						color: systemColor(UIColor.white)
					}}
				/>
			
			<Image
				source={require('../../assets/images/logo_white.png')}
				style={{
					marginTop: maxHeightActually * 0.05,
					width: maxWidthActually * .7,
					height: maxHeightActually * .3,
					resizeMode: 'contain',

				}}
			/>

			<View
				marginTop={- maxHeightActually * 0.05}
				height={maxHeightActually}
				width={maxWidthActually}
				backgroundColor={systemColor(UIColor.white)}
				borderRightRadius={30}
				borderLeftRadius={30}
			>
				<View
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					paddingTop={maxHeightActually * 0.04}
				>
					<Text
						style={{
							fontSize: FontSize.h1,
							fontWeight: '900',
							color: systemColor(UIColor.black)
						}}
					>{getLabel('forgot_password.label_fogot_password')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						{getLabel('forgot_password.label_input_phone_number')}
					</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder={getLabel('forgot_password.placeholder_phone_number')}
						keyboardType='number-pad'
						onChangeText={(value) => {
							setPhoneNumber(value);
						}}
						style={{
							fontFamily: 'Roboto',
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
					/>
					<Button
						colorScheme='primary'
						borderRadius={30}
						marginTop={maxHeightActually * 0.04}
						onPress={() => handleLogin()}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "600",
								color: systemColor(UIColor.white)
							}}
						>{getLabel('forgot_password.btn_continue')}</Text>
					</Button>
				</View>
			</View>
		</ImageBackground>
	)
}

export default ForgetPasswordScene