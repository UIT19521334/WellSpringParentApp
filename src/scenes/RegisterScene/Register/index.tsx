import { Text, ImageBackground, Image, Alert, ScrollView } from 'react-native';
import { 
	maxHeightActually, 
	maxWidthActually, 
	defaultPaddingHorizontal 
} from '../../../utils/sizes';
import { Center, View, VStack, HStack, Input, Button } from 'native-base';
import { FontSize } from '../../../utils/fontSize';
import { systemColor, UIColor } from '../../../utils/colors';
import { Icon } from '../../../themes/Icons/IconCustom';
import React, { useState } from 'react';
import Global from '../../../Global';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { UserLogin } from '../../../utils/models';
import { getLabel, validateEmail } from '../../../utils/commons';
const Register = ({ }) => {

	// check login information
	const [name, setName] = useState<string | null>('');
	const [birthday, setBirthday] = useState<string | null>('');
	const [cmnd, setCmnd] = useState<string | null>('');
	const [email, setEmail] = useState<string | null>('');
	const [province, setProvince] = useState<string | null>('');
	const [town, setTown] = useState<string | null>('');
	const [address, setAddress] = useState<string | null>('');
	const [student, setStudent] = useState<string | null>('');
	const {signIn} = useAuthentication();

	// handle login
	const handleRegister = () => {
		if (!name) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_name_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!birthday) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_birthday_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!cmnd) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_identity_card_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!email) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_email_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if ( ! validateEmail(email) ){
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_email_invalid'), 
				[{ text: "OK" },]
			);
			return 
		}
		if (!province) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_province_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!town) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_town_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!address) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_address_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		if (!student) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('register.msg_student_empty'), 
				[{ text: "OK" },]
			);
			return ;
		}
		const user: UserLogin = {
			username: "0914599590",
			password: "dat"
		};

		signIn?.(user);
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
				onPress = {()=> Global.navigationRef?.navigate('InputPassword')}
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
				height={maxHeightActually * 0.7}
				width={maxWidthActually}
				backgroundColor={systemColor(UIColor.white)}
				borderRightRadius={30}
				borderLeftRadius={30}
			>
				<View
					height={maxHeightActually * 0.5}
				>
					<Text
						style={{
							fontSize: FontSize.h1,
							fontWeight: '900',
							color: systemColor(UIColor.black),
							paddingLeft: defaultPaddingHorizontal,
							paddingRight: defaultPaddingHorizontal,
							marginTop: maxHeightActually *0.04
						}}
					>{getLabel('register.label_register_information')}</Text>
					<Text
						style={{
							paddingLeft: defaultPaddingHorizontal,
							paddingRight: defaultPaddingHorizontal,
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						{getLabel('register.label_register_information_detail')}
					</Text>
					<ScrollView
						style={{
							paddingLeft: defaultPaddingHorizontal,
							paddingRight: defaultPaddingHorizontal,
						}}
					>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_name')}
							onChangeText={(value) => {
								setName(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_birthday')}
							onChangeText={(value) => {
								setBirthday(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_identity_card')}
							keyboardType='number-pad'
							onChangeText={(value) => {
								setCmnd(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_email')}
							onChangeText={(value) => {
								setEmail(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_province')}
							onChangeText={(value) => {
								setProvince(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_town')}
							onChangeText={(value) => {
								setTown(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_address')}
							onChangeText={(value) => {
								setAddress(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>
						<Input
							size='md'
							variant="underlined"
							placeholder={getLabel('register.placeholder_student')}
							onChangeText={(value) => {
								setStudent(value);
							}}
							style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.black),
								marginTop: maxHeightActually * 0.02
							}}
						/>


					</ScrollView>

				</View>
				<Button
					colorScheme='primary'
					borderRadius={30}
					marginLeft={defaultPaddingHorizontal}
					marginRight={defaultPaddingHorizontal}
					marginTop={maxHeightActually * 0.04}
					onPress={() => handleRegister()}
				>
					<Text
						style={{
							fontSize: FontSize.h4,
							fontWeight: "600",
							color: systemColor(UIColor.white)
						}}
					>{getLabel('register.btn_confirm')}</Text>
				</Button>
			</View>
		</ImageBackground>
	)
}
export default Register