import { Text, ImageBackground, Image, Alert } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../utils/fontSize'
import { systemColor, UIColor } from '../../utils/colors'
import { Icon } from '../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import userData from "../../assets/json/user.json"
import Global from '../../Global'
const RegisterScene = ({}) => {

	// get show password
	const [showPass, setShowPass] = useState(false)

	// check login information
	const [phoneNumber, setPhoneNumber] = useState()
	const [passWord, setPassWord] = useState()

	// handle login
	const checkLogin = (user, pass) => {
		if (user == userData[0].phonenumber) {
			if (pass == userData[0].password) {
				return true;
			} else return false;
		} else return false;
	}
	const handleLogin = () => {
		if (phoneNumber) {
			if (passWord) {
				if (checkLogin(phoneNumber, passWord) == true) {
					Alert.alert("Congrasulation", "Login success", [
						{ text: "OK" },
					]);
				} else {
					Alert.alert("Warning", "Your phone number/password incorrect", [
						{ text: "OK" },
					]);
				}
			} else {
				Alert.alert("Warning", "Please input your password", [
					{ text: "OK" },
				]);
			}
		} else {
			Alert.alert("Warning", "Please input your phone number", [
				{ text: "OK" },
			]);
		}
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
					>Đăng nhập</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder="Nhập số điện thoại"
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
					<Input
						size='md'
						variant="underlined"
						placeholder="Nhập mật khẩu"
						type={showPass ? "text" : "password"}
						onChangeText={(value) => {
							setPassWord(value);
						}}
						style={{
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
						InputRightElement={
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
						onPress={()=>handleLogin()}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "600",
								color: systemColor(UIColor.white)
							}}
						>Đăng nhập</Text>
					</Button>
					<Text
						style={{
							fontSize: FontSize.h4,
							fontWeight: "300",
							textAlign: 'center',
							color: systemColor(UIColor.accent1),
							marginTop: maxHeightActually * 0.02
						}}
					>Quên mật khẩu</Text>
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

export default RegisterScene