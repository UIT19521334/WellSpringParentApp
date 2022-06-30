import { Text, ImageBackground, Image, Alert } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../utils/fontSize'
import { systemColor, UIColor } from '../../utils/colors'
import { Icon } from '../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import userData from "../../assets/json/user.json"
import Global from '../../Global'
const ForgetPasswordScene = ({ }) => {

	// get show password
	const [showPass, setShowPass] = useState(false)

	// check login information
	const [phoneNumber, setPhoneNumber] = useState()

	// handle login

	const handleLogin = () => {
		if (phoneNumber) {
			Alert.alert("Warning", "Your phone number/password incorrect", [
				{ text: "OK" },]);
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
					>Quên mật khẩu</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						Nhập số điện thoại để hệ thống gửi mã xác thực
					</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder="Số điện thoại"
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
						>Tiếp tục</Text>
					</Button>
				</View>
			</View>
		</ImageBackground>
	)
}

export default ForgetPasswordScene