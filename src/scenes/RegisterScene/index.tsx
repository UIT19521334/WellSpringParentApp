import { Text, ImageBackground, Image, Alert } from 'react-native';
import { 
	maxHeightActually, 
	maxWidthActually, 
	defaultPaddingHorizontal, 
	avatarAbsoluteProfileHeight 
} from '../../utils/sizes';
import { Center, View, VStack, HStack, Input, Button } from 'native-base';
import { FontSize } from '../../utils/fontSize';
import { systemColor, UIColor } from '../../utils/colors';
import { Icon } from '../../themes/Icons/IconCustom';
import React, { useState } from 'react';
import Global from '../../Global';
import { getLabel } from '../../utils/commons';
const RegisterScene = ({ }) => {

	// check number information
	const [phoneNumber, setPhoneNumber] = useState<String|null>("")

	// handle next
	const handleNext = () => {
		if (!phoneNumber) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.phone_number_empty_msg'), 
				[{ text: "OK" },]
			);
			return;
		} 
		Global.navigationRef?.navigate('RegisterOTP');
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
					onPress = {()=> Global.navigationRef?.navigate('WelcomeScene')}
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
					>{getLabel('register.label_welcome')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						{getLabel('register.label_enter_phone_number')}
					</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder={getLabel('register.placeholder_phone_number')}
						keyboardType='number-pad'
						onChangeText={(value) => {
							setPhoneNumber(value);
						}}
						style={{
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
					/>
					<Button
						colorScheme='primary'
						borderRadius={30}
						marginTop={maxHeightActually * 0.04}
						onPress={() => handleNext()}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "600",
								color: systemColor(UIColor.white)
							}}
						>{getLabel('register.btn_continue')}</Text>
					</Button>
				</View>
			</View>
		</ImageBackground>
	)
}

export default RegisterScene