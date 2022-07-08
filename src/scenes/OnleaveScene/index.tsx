import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, HStack, Center, VStack } from 'native-base'
import { getLabel } from '../../utils/commons'
import { systemColor, UIColor } from '../../utils/colors'
import { FontSize } from '../../utils/fontSize'
import { Icon } from '../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually, maxWidthActually } from '../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign';
const OnleaveScene = () => {
	const navigation = useNavigation();
	const [isNull, setIsNull] = useState<true | false>(false)
	return (
		<View>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					alignItems='center'
					justifyContent='space-between'

					style={{
						marginTop: headerAbsoluteHeight * 0.4,
					}}
				>
					<HStack
						alignItems='center'
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
							{getLabel('onleave.title_onleave')}
						</Text>
					</HStack>
					<TouchableOpacity
						onPress={()=>navigation.navigate('CreateLeave')}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								marginLeft: 10,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('onleave.label_create_onleave')}
						</Text>
					</TouchableOpacity>
				</HStack>
			</View>
			{
				isNull ?
					<Center

						paddingLeft={defaultPaddingHorizontal}
						paddingRight={defaultPaddingHorizontal}
						height={maxHeightActually * 0.4}
					>
						<Image source={require('../../assets/images/empty.png')}
							style={{
								width: maxWidthActually * 0.6,
								resizeMode: 'contain',
							}}
						/>
						<Text
							style={{
								marginTop: 10,
								fontSize: FontSize.h5,
								fontWeight: 'bold',
								color: systemColor(UIColor.black)
							}}
						>
							{getLabel('onleave.label_onleave_null')}
						</Text>
						<Text
							style={{
								marginTop: 20,
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black3),
								textAlign: 'center'
							}}
						>
							{getLabel('onleave.label_onleave_null_detail')}
						</Text>
					</Center>
					:
					<View>
						<TouchableOpacity
							onPress={()=>navigation.navigate('OnleaveDetail')}
						>
							<HStack
								padding={defaultPaddingHorizontal}
								backgroundColor={systemColor(UIColor.white)}
							>
								<View
									borderWidth={1}
									padding={2}
									borderRadius={1000}
									borderColor={systemColor(UIColor.black8)}
								>
									<AntDesign
										name='filetext1'
										size={30}
										color={systemColor(UIColor.accent)}
									/>
								</View>
								<VStack
									marginLeft={maxWidthActually * 0.05}
									justifyContent='space-between'
								>
									<Text
										style={{
											fontSize: FontSize.h5,
											fontWeight: 'bold',
											color: systemColor(UIColor.black),
											width: maxWidthActually * 0.7
										}}
									>Nguyễn Phương Anh - 2A3</Text>
									<Text
										style={{
											fontSize: FontSize.h5,
											color: systemColor(UIColor.black1),
											width: maxWidthActually * 0.7
										}}
									>{getLabel('onleave.label_onleave_when')} 09/01/2021 - 10/01/2021</Text> 

								</VStack>
							</HStack>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>navigation.navigate('OnleaveDetail')}
							style={{marginTop: 10}}
						>
							<HStack
								padding={defaultPaddingHorizontal}
								backgroundColor={systemColor(UIColor.white)}
							>
								<View
									borderWidth={1}
									padding={2}
									borderRadius={1000}
									borderColor={systemColor(UIColor.black8)}
								>
									<AntDesign
										name='filetext1'
										size={30}
										color={systemColor(UIColor.accent)}
									/>
								</View>
								<VStack
									marginLeft={maxWidthActually * 0.05}
									justifyContent='space-between'
								>
									<Text
										style={{
											fontSize: FontSize.h5,
											fontWeight: 'bold',
											color: systemColor(UIColor.black),
											width: maxWidthActually * 0.7
										}}
									>Nguyễn Phương Anh - 2A3</Text>
									<Text
										style={{
											fontSize: FontSize.h5,
											color: systemColor(UIColor.black1),
											width: maxWidthActually * 0.7
										}}
									>{getLabel('onleave.label_onleave2')} 30/12/2020</Text> 

								</VStack>
							</HStack>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>navigation.navigate('OnleaveDetail')}
							style={{marginTop: 10}}
						>
							<HStack
								padding={defaultPaddingHorizontal}
								backgroundColor={systemColor(UIColor.white)}
							>
								<View
									borderWidth={1}
									padding={2}
									borderRadius={1000}
									borderColor={systemColor(UIColor.black8)}
								>
									<AntDesign
										name='filetext1'
										size={30}
										color={systemColor(UIColor.accent)}
									/>
								</View>
								<VStack
									marginLeft={maxWidthActually * 0.05}
									justifyContent='space-between'
								>
									<Text
										style={{
											fontSize: FontSize.h5,
											fontWeight: 'bold',
											color: systemColor(UIColor.black)
										}}
									>Nguyễn Phương Anh - 2A3</Text>
									<Text
										style={{
											fontSize: FontSize.h5,
											color: systemColor(UIColor.black1),
											width: maxWidthActually * 0.7
										}}
									>{getLabel('onleave.label_onleave_when')} 30/11/2020 - 05/12/2020</Text> 

								</VStack>
							</HStack>
						</TouchableOpacity>
					</View>
			}
		</View>
	)
}

export default OnleaveScene
const styles = StyleSheet.create({
	btn_focus: {
		borderRadius: 20,
		width: maxWidthActually * 0.45,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: systemColor(UIColor.white),
		alignItems: 'center'
	},
	btn_unfocus: {
		borderRadius: 20,
		width: maxWidthActually * 0.45,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: systemColor(UIColor.accent),
		alignItems: 'center'
	},
	text_focus: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.accent),
		fontWeight: 'bold',
	},
	text_unfocus: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.white),
		fontWeight: 'bold',
	}
})