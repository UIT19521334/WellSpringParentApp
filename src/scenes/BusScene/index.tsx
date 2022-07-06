import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, HStack } from 'native-base'
import { getLabel } from '../../utils/commons'
import { systemColor, UIColor } from '../../utils/colors'
import { FontSize } from '../../utils/fontSize'
import { Icon } from '../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually, maxWidthActually } from '../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import { ScrollView } from 'react-native-gesture-handler'
import Bus from './Bus'
import Attendance from './Attendance'
const BusScene = () => {
	const navigation = useNavigation();
	const [isBus, setIsBus] = useState<true | false>(false)
	return (
		<View>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
			>
				<HStack
					alignItems='center'
					style={{
						marginTop: 20,
						marginLeft: 20
					}}
				>
					<Icon
						onPress={() => navigation.goBack()}
						name='long-arrow-left'
						size={40}
						color={systemColor(UIColor.white)}
					/>
					<Text
						style={{
							fontSize: FontSize.h3,
							fontWeight: 'bold',
							marginLeft: 10,
							color: systemColor(UIColor.white)
						}}
					>
						{getLabel('bus.label_attendance_bus')}
					</Text>
				</HStack>
				<HStack
					alignItems='center'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					marginTop={headerAbsoluteHeight * 0.05}
					justifyContent='space-between'
				>
					<TouchableOpacity
						onPress={() => setIsBus(false)}
						style={isBus ? styles.btn_unfocus : styles.btn_focus}
					>
						<Text
							style={isBus ? styles.text_unfocus : styles.text_focus}
						>
							{getLabel('bus.btn_attendance')}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setIsBus(true)}
						style={isBus ? styles.btn_focus : styles.btn_unfocus}
					>
						<Text
							style={isBus ? styles.text_focus : styles.text_unfocus}
						>
							{getLabel('bus.btn_bus')}
						</Text>
					</TouchableOpacity>
				</HStack>
			</View>
			<ScrollView>
				{
					isBus ? <Bus /> : <Attendance />
				}
			</ScrollView>
		</View>
	)
}

export default BusScene
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