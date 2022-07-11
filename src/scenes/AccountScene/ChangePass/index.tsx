import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, HStack, Input, Button, Center } from 'native-base';
import { systemColor, UIColor } from '../../../utils/colors';
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core';
import { Icon } from '../../../themes/Icons/IconCustom';
import { FontSize } from '../../../utils/fontSize';
import { getLabel } from '../../../utils/commons';
import userData from '../../../assets/json/user.json';
const ChangePass = () => {
	const navigation = useNavigation();
	const [currPass, setCurrPass] = useState<String | null>('')
	const [newPass, setNewPass] = useState<String | null>('')
	const [confirmPass, setConfirmPass] = useState<String | null>('')
	const [showCurrPass, setShowCurrPass] = useState<true | false>(false)
	const [showNewPass, setShowNewPass] = useState<true | false>(false)
	const [showConfirmPass, setShowConfirmPass] = useState<true | false>(false)

	// handle confirm
	const handleConfirm =() =>{
		if (!currPass) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_password_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 
		if (currPass != userData[0].password) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_curr_password_invalid'), 
				[{ text: "OK" },]
			);
			return;
		} 
		if (!newPass) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_new_password_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 
		if (!confirmPass) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_confirm_new_password_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 

		if (confirmPass != newPass) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_password_invalid'), 
				[{ text: "OK" },]
			);
			return;
		} 
		navigation.goBack();
	}
	return (
		<View>
			{/* Header title */}
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					alignItems='center'
					style={{
						marginTop: headerAbsoluteHeight * 0.4,
					}}
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
							fontSize: FontSize.h3,
							fontWeight: 'bold',
							marginLeft: 10,
							color: systemColor(UIColor.white)
						}}
					>
						{getLabel('student.btn_change_password')}
					</Text>
				</HStack>
			</View>

			{/* Body */}
			<View
				padding={defaultPaddingHorizontal}
			>
				<Input
					// size='md'
					variant="underlined"
					placeholder={getLabel('student.placeholder_curr_password')}
					// type={showPass ? "text" : "password"}
					secureTextEntry={showCurrPass ? false : true}
					onChangeText={(value) => {
						setCurrPass(value);
					}}
					style={{
						fontSize: FontSize.h4,
						color: systemColor(UIColor.black),
						marginTop: maxHeightActually * 0.02
					}}
					InputRightElement={
						currPass == '' ?
							undefined :
							<Button variant='unstyled' onPress={() => setShowCurrPass(!showCurrPass)} >
								<Icon
									name={showCurrPass ? "eye" : "eye-slash"}
									size={20}
								/>
							</Button>
					}
				/>
				<Input
					// size='md'
					variant="underlined"
					placeholder={getLabel('student.placeholder_new_password')}
					// type={showPass ? "text" : "password"}
					secureTextEntry={showNewPass ? false : true}
					onChangeText={(value) => {
						setNewPass(value);
					}}
					style={{
						fontSize: FontSize.h4,
						color: systemColor(UIColor.black),
						marginTop: maxHeightActually * 0.02
					}}
					InputRightElement={
						newPass == '' ?
							undefined :
							<Button variant='unstyled' onPress={() => setShowNewPass(!showNewPass)} >
								<Icon
									name={showNewPass ? "eye" : "eye-slash"}
									size={20}
								/>
							</Button>
					}
				/>
				<Input
					// size='md'
					variant="underlined"
					placeholder={getLabel('student.placeholder_confirm_password')}
					// type={showPass ? "text" : "password"}
					secureTextEntry={showConfirmPass ? false : true}
					onChangeText={(value) => {
						setConfirmPass(value);
					}}
					style={{
						fontSize: FontSize.h4,
						color: systemColor(UIColor.black),
						marginTop: maxHeightActually * 0.02
					}}
					InputRightElement={
						confirmPass == '' ?
							undefined :
							<Button variant='unstyled' onPress={() => setShowConfirmPass(!showConfirmPass)} >
								<Icon
									name={showConfirmPass ? "eye" : "eye-slash"}
									size={20}
								/>
							</Button>
					}
				/>
			</View>
			<Center
				style={{
					position:'absolute',
					top : maxHeightActually * 0.8,
					right: defaultPaddingHorizontal
				}}
			>
				<Button
					onPress={handleConfirm}
					width={maxWidthActually - defaultPaddingHorizontal * 2}
					borderRadius='3xl'
				>
					<Text style={styles.button}>{getLabel('common.btn_confirm')}</Text>
				</Button>
			</Center>
		</View>
	)
}

export default ChangePass
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
	},
	button: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.white),
		fontWeight: 'bold',
	},
})