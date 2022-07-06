import {  StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {View, HStack, VStack } from 'native-base'
import { getLabel } from '../../../../utils/commons'
import { systemColor, UIColor } from '../../../../utils/colors'
import { FontSize } from '../../../../utils/fontSize'
import { defaultPaddingHorizontal, maxWidthActually } from '../../../../utils/sizes'
import Feather from 'react-native-vector-icons/Feather';
const AttendanceDay = (props : any) => {

	// is attend
	const [isAttend, setIsAttend] = useState<true|false>(true);
	const [isAttend2, setIsAttend2] = useState<true|false>(false);

	return (
		<View>
			<View
				padding={defaultPaddingHorizontal}
			>
				<Text>{props.day}</Text>
			</View>
			<TouchableOpacity
				onPress={()=>props.handleAttend(getLabel('bus.label_attendance_end_day'),isAttend)}
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
						<Feather
							name='list'
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
						>{getLabel('bus.label_attendance_end_day')}</Text>
						{
							isAttend ?
								<Text style={styles.attend} >{getLabel('bus.label_attend')}</Text> :
								<Text style={styles.unattend} >{getLabel('bus.label_unattend')}</Text>
						}
					</VStack>
				</HStack>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={()=>props.handleAttend(getLabel('bus.label_attendance_start_day'), isAttend2)}
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
						<Feather
							name='list'
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
						>{getLabel('bus.label_attendance_start_day')}</Text>
						{
							isAttend2 ?
								<Text style={styles.attend} >{getLabel('bus.label_attend')}</Text> :
								<Text style={styles.unattend} >{getLabel('bus.label_unattend')}</Text>
						}
					</VStack>
				</HStack>
			</TouchableOpacity>
		</View>
	)
}

export default AttendanceDay
const styles = StyleSheet.create({
	attend: {
		color: systemColor(UIColor.accent),
		fontSize:FontSize.h5,
	},
	unattend: {
		color: systemColor(UIColor.useful),
		fontSize:FontSize.h5,
	},

})