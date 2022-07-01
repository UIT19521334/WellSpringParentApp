import { Text, ImageBackground, Image, Alert, ScrollView } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import Global from '../../../Global'
import RegisterOTP from '../RegisterOTP'
import { useAuthentication } from '../../../hooks/useAuthentication'
import { UserLogin } from '../../../utils/models'
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
			Alert.alert("Warning", "Please input your full name", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!birthday) {
			Alert.alert("Warning", "Please input your birthday", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!cmnd) {
			Alert.alert("Warning", "Please input your CMND", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!email) {
			Alert.alert("Warning", "Please input your email", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!province) {
			Alert.alert("Warning", "Please input your province", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!town) {
			Alert.alert("Warning", "Please input your town", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!address) {
			Alert.alert("Warning", "Please input your address", [
				{ text: "OK" },
			]);
			return ;
		}
		if (!student) {
			Alert.alert("Warning", "Please input your student", [
				{ text: "OK" },
			]);
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
					>Thông tin đăng ký</Text>
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
						Nhập thông tin để đăng ký tài khoản
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
							placeholder="Họ và tên"
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
							placeholder="Ngày sinh"
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
							placeholder="CMND"
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
							placeholder="Email"
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
							placeholder="Tỉnh/Thành phố"
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
							placeholder="Quận/Huyện"
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
							placeholder="Địa chỉ"
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
							placeholder="Học sinh (Tên - Ngày sinh - Lớp)"
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
					>Xác nhận</Text>
				</Button>
			</View>
		</ImageBackground>
	)
}

export default Register