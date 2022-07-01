import { Text, ImageBackground, Image, Alert } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import userData from "../../../assets/json/user.json"
import Global from '../../../Global'
const InputPassword = ({ }) => {

	// get show password
	const [showNewPassword, setShowNewPassword] = useState<true|false>(false)
	

	// check login information
	const [newPassword, setNewPassword] = useState<String|null>("")
	

	// handle login

	const handleRegister = () => {
		if (newPassword) {
			Global.navigationRef?.navigate('Register')
		} else {
			Alert.alert("Warning", "Please input your new password", [
				{ text: "OK" },
			]);
		}
	};

	return (
		<ImageBackground
			source={require('../../../assets/images/splash.jpg')}
			style={{
				position: 'absolute',
				alignItems: 'center',
				left: 0,
				top: 0,
			}}
		>
			<Icon
				onPress = {()=> Global.navigationRef?.navigate('RegisterOTP')}
				name = 'long-arrow-left'
				size={40}
				style={{
					position: 'absolute',
					top: 30,
					left: 20,
					color: systemColor(UIColor.white)
				}}
			/>
			<Image
				source={require('../../../assets/images/logo_white.png')}
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
					>Nhập mật khẩu mới</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						Tạo mật khẩu mới để đăng nhập cho lần sau 
					</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder="Mật khẩu mới"
						type={showNewPassword ? "text" : "password"}
						onChangeText={(value) => {
							setNewPassword(value);
						}}
						style={{
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
						InputRightElement={
							<Button variant='unstyled' onPress={() => setShowNewPassword(!showNewPassword)} >
								<Icon
									name={showNewPassword ? "eye" : "eye-slash"}
									size={20}
								/>
							</Button>
						}
					/>
					
					<Button
						colorScheme='primary'
						borderRadius={30}
						marginTop={maxHeightActually * 0.04}
						onPress={() => handleRegister()}
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

export default InputPassword