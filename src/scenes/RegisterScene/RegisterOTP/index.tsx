import { Text, ImageBackground, Image, Alert } from 'react-native'
import { maxHeightActually, maxWidthActually, defaultPaddingHorizontal } from '../../../utils/sizes'
import { Center, View, VStack, HStack, Input, Button } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import React, { useState } from 'react'
import userData from "../../../assets/json/user.json"
import Global from '../../../Global'
import { getLabel } from '../../../utils/commons'
const RegisterOTP = ({ }) => {

	// check otp information
	const [otp, setOTP] = useState()

	// handle otp

	const handleOTP = () => {
		if (!otp) {
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_OTP_empty'), 
				[{ text: "OK" },]
			);
			return;
		} 
		if (otp != '000000'){
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_OTP_invalid'), 
				[{ text: "OK" },]
			);
			return;
		}
		if (timerRef.current < 0){
			Alert.alert(
				getLabel('common.title_modal_notification_setting'), 
				getLabel('forgot_password.msg_OTP_expired'), 
				[{ text: "OK" }, {
					text:'Send new OTP',
					onPress: ()=> timerRef.current = 120,
				}]
			);
			return;
		}
		Global.navigationRef?.navigate('InputPassword')
	};

	// Time count down
	const [min, setMin] = React.useState(2)
	const [time1, setTime1] = React.useState(0);
	const [time2, setTime2] = React.useState(0);

	const timerRef = React.useRef(min * 60);

	React.useEffect(() => {
		const timerId = setInterval(() => {
			timerRef.current -= 1;
			if (timerRef.current < 0) {
				clearInterval(timerId);
			} else {
				setMin( Math.floor(timerRef.current / 60) )
				setTime1( Math.floor(timerRef.current / 10) % 6 )
				setTime2(timerRef.current % 10);
			}
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);
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
				onPress = {()=> Global.navigationRef?.navigate('RegisterScene')}
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
					>
						{getLabel('forgot_password.label_fogot_password_OTP')}</Text>
					<Text
						style={{
							fontSize: FontSize.h5,
							fontWeight: '500',
							marginTop: maxHeightActually * 0.01,
							color: systemColor(UIColor.black2)
						}}
					>
						{getLabel('forgot_password.label_fogot_password_OTP_detail')}
					</Text>
					<Input
						size='md'
						variant="underlined"
						placeholder="000 000"
						keyboardType='number-pad'
						onChangeText={(value) => {
							setOTP(value);
						}}
						style={{
							fontFamily: 'Roboto',
							fontSize: FontSize.h4,
							color: systemColor(UIColor.black),
							marginTop: maxHeightActually * 0.02
						}}
						InputRightElement={
							<Text
								style={{
									color: systemColor(UIColor.useful)
								}}
							>{min}:{time1}{time2}</Text>
						}
					/>
					<Button
						colorScheme='primary'
						borderRadius={30}
						marginTop={maxHeightActually * 0.04}
						onPress={() => handleOTP()}
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

export default RegisterOTP