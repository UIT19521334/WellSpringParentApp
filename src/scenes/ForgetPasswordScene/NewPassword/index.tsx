import { Text, ImageBackground, Image, Alert } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import Global from '../../../Global'
import { useNavigation } from '@react-navigation/core'
import { getLabel } from '../../../utils/commons'
const NewPassword = ({ }) => {

	const navigation = useNavigation()

	// get show password
	const [showNewPassword, setShowNewPassword] = useState<true|false>(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState<true|false>(false)

	// check login information
	const [newPassword, setNewPassword] = useState<String|null>('')
	const [confirmPassword, setConfirmPassword] = useState<String|null>('')

	// handle login
	const handleLogin = () => {

		if (!newPassword) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_new_password_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 

		if (!confirmPassword) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_confirm_new_password_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 

		if (confirmPassword != newPassword) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_password_invalid'), 
				[{ text: "OK" },]
			);
			return;
		} 
		
		navigation.navigate('LoginScene');
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
				onPress = {()=> navigation.navigate('ForgetOTP')}
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
					>{getLabel('forgot_password.label_enter_new_password')}</Text>

					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>{getLabel('forgot_password.label_create_new_password')}</Text>

					<Input
						size='md'
						variant="underlined"
						placeholder={getLabel('forgot_password.placeholder_new_password')}
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
					<Input
						size='md'
						variant="underlined"
						placeholder={getLabel('forgot_password.placeholder_confirm_new_password')}
						type={ showConfirmPassword ? "text" : "password"}
						onChangeText={(value) => {
							setConfirmPassword(value);
						}}
						style={{
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
						InputRightElement={
							<Button variant='unstyled' onPress={() => setShowConfirmPassword(!showConfirmPassword)} >
								<Icon
									name={showConfirmPassword ? "eye" : "eye-slash"}
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
						>{getLabel('forgot_password.btn_continue')}</Text>
					</Button>
				</View>
			</View>
		</ImageBackground>
	)
}

export default NewPassword