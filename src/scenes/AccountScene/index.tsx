import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { View, Button, HStack , ScrollView } from 'native-base'
import { Icon } from '../../themes/Icons/IconCustom'
import { systemColor, UIColor } from '../../utils/colors'
import { FontSize } from '../../utils/fontSize'
import { getLabel } from '../../utils/commons'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../utils/sizes'
import { useAuthentication } from '../../hooks/useAuthentication';
import { useNavigation } from '@react-navigation/core';
const AccountContent = (props: any) => {
	const navigation = useNavigation();
	let screen = props.screen ;
	const handleScreen = () =>{
		if (screen == 'Profile'){
			navigation.navigate('Profile');
			return;
		}

		if (screen == 'StudentProfile'){
			navigation.navigate('StudentProfile');
			return;
		}
		if (screen == 'ChangePass'){
			navigation.navigate('ChangePass');
			return;
		}
		if (screen == 'NotifiSetting'){
			navigation.navigate('NotifiSetting');
			return;
		}
		if (screen == 'AboutUs'){
			navigation.navigate('AboutUs');
			return;
		}
	}
	return (
		<TouchableOpacity
			onPress={()=> handleScreen()}
			style={{
				padding: defaultPaddingHorizontal,
				backgroundColor: systemColor(UIColor.white),
			}}
		>
			<HStack
				alignItems='center'
				justifyContent='space-between'
			>
				<HStack 
					alignItems='center' 
					justifyContent='space-between'	
					width={maxWidthActually * 0.8}
				>
					<Icon name={props.icon} size={28} color={systemColor(UIColor.black)} />
					<Text style={{
						fontSize: FontSize.h4,
						color: systemColor(UIColor.black),
						width: maxWidthActually * 0.65,
						marginLeft: 20,
					}} >{props.content}</Text>
				</HStack>
				<Icon name='angle-right' size={28} color={systemColor(UIColor.black)} />
			</HStack>
		</TouchableOpacity>
	)
}

const AccountScene = () => {
	const { signOut } = useAuthentication();
	const handleSignout = () =>{
		Alert.alert(
			getLabel('common.title_modal_notification_setting'), 
			getLabel('sidebar.alert_logout_msg'), 
			[{ text: "OK", onPress: () => signOut?.()},{text: "Cancel"}]
		);
	}
	return (
		<View>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
			>
				<View
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					marginTop={headerAbsoluteHeight * 0.4}
				>
					<HStack
						space={2}
						alignItems='center'
					>
						<Button
							backgroundColor={systemColor(UIColor.white)}
							borderRadius={1000}
						>
							<Icon
								name='user'
								size={24}
								color={systemColor(UIColor.accent)}

							/>
						</Button>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.white),
								fontWeight: '700'
							}}
						>
							Nguyễn Thị Minh Thùy
						</Text>
					</HStack>
				</View>
			</View>
			<ScrollView>
				<Text style={styles.title}>{getLabel('student.label_PHHS')}</Text>
				<AccountContent icon={'user'} content={getLabel('student.label_profile')} screen='Profile' />
				<AccountContent icon={'users'} content={getLabel('student.label_student_info')} screen='StudentProfile'  />

				<Text style={styles.title}>{getLabel('student.label_setting')}  </Text>
				<AccountContent icon={'key'} content={getLabel('student.btn_change_password')} screen='ChangePass' />
				<AccountContent icon={'bell'} content={getLabel('student.btn_notifi')} screen='NotifiSetting' />

				<Text style={styles.title}>{getLabel('student.label_support')}</Text>
				<AccountContent icon={'headset'} content={getLabel('student.btn_contact')} />
				<AccountContent icon={'info-circle'} content={getLabel('student.btn_about_us')} screen='AboutUs' />

				{/* Button logout */}
				<TouchableOpacity
					onPress={()=>handleSignout()}
					style={{
						padding: defaultPaddingHorizontal,
						backgroundColor: systemColor(UIColor.white),
					}}
				>
					<HStack
						alignItems='center'
					>
						<Icon name='sign-out-alt' size={28} color={systemColor(UIColor.useful1)} />
							<Text style={{
								fontSize: FontSize.h4,
								color: systemColor(UIColor.useful1),
								marginLeft: 20,
							}} >{getLabel('student.btn_logout')}</Text>
					</HStack>
				</TouchableOpacity>

				{/* Cách bottom một khoảng = view */}
				<View height='56' /> 
			</ScrollView>

		</View>
	)
}

export default AccountScene
const styles = StyleSheet.create({
	title: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.black4),
		paddingLeft: defaultPaddingHorizontal,
		width: maxWidthActually * 0.8,
		marginTop: 16,
		marginBottom: 16,
		fontWeight: '700',
	},
	not_break: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.accent)
	},
})
