import { Text, ImageBackground, Image, Alert } from 'react-native';
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../utils/sizes';
import { Center, View, VStack, HStack, Input, Button } from 'native-base';
import { FontSize } from '../../utils/fontSize';
import { systemColor, UIColor } from '../../utils/colors';
import { Icon } from '../../themes/Icons/IconCustom';
import React, { useEffect, useState } from 'react';
import userData from "../../assets/json/user.json";
import Global from '../../Global';
import { useAuthentication } from '../../hooks/useAuthentication';
import { getLabel } from '../../utils/commons';
import { useNavigation } from '@react-navigation/core';
const LoginScene = ({ }) => {

	const navigation = useNavigation();
	// get show password
	const [showPass, setShowPass] = useState<true | false>(false)

	// check login information
	const [phoneNumber, setPhoneNumber] = useState<String | null>("")
	const [passWord, setPassWord] = useState<String | null>("");

	const { signIn } = useAuthentication()


	// handle login
	const handleLogin = () => {

		if (!phoneNumber) {
			Alert.alert(getLabel('common.title_modal_notification_setting'), getLabel('login.phone_number_empty_msg'), [
				{ text: "OK" },
			]);
			return;
		}

		if (!passWord) {
			Alert.alert(getLabel('common.title_modal_notification_setting'), getLabel('login.password_empty_msg'), [
				{ text: "OK" },
			]);
			return;
		}

		if (phoneNumber != userData[0].phonenumber) {
			Alert.alert(getLabel('common.title_modal_notification_setting'), getLabel('login.phone_number_invalid_msg'), [
				{ text: "OK" },
			]);
			return;
		}

		if (passWord != userData[0].password) {
			Alert.alert(getLabel('common.title_modal_notification_setting'), getLabel('login.login_error_msg'), [
				{ text: "OK" },
			]);
			return;
		}

		signIn?.({
			username: phoneNumber,
			password: passWord
		})

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
					>{getLabel('login.btn_sing_in')}</Text>
					<Input
						// size='md'
						variant="underlined"
						placeholder={getLabel('login.placeholder_phone_number')}
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
					<Input
						// size='md'
						variant="underlined"
						placeholder={getLabel('login.placeholder_password')}
						// type={showPass ? "text" : "password"}
						secureTextEntry={showPass ? false : true}
						onChangeText={(value) => {
							setPassWord(value);
						}}
						style={{
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
						InputRightElement={
							passWord =='' ? 
							undefined : 
							<Button variant='unstyled' onPress={() => setShowPass(!showPass)} >
								<Icon
									name={showPass ? "eye" : "eye-slash"}
									size={20}
								/>
							</Button>
						}
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
						>{getLabel('login.btn_sing_in')}</Text>
					</Button>
					<Button
						onPress={() => navigation.navigate('ForgetPasswordScene')}
						variant='unstyled'
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "300",
								textAlign: 'center',
								color: systemColor(UIColor.accent1),
								marginTop: maxHeightActually * 0.02
							}}
						>{getLabel('login.btn_forgot_your_password')}</Text>
					</Button>
					<Text
						style={{
							bottom: - maxHeightActually * 0.22,
							color: systemColor(UIColor.black5),
							fontSize: FontSize.h6,
							textAlign: 'center',

						}}>
						Copyright @OnlineCRM
					</Text>
				</View>
			</View>
		</ImageBackground>
	)
}

export default LoginScene