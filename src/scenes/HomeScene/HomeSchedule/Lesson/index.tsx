import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { systemColor, UIColor } from '../../../../utils/colors'
import { View, HStack, VStack, Box } from 'native-base'
import { defaultPaddingHorizontal, maxWidthActually } from '../../../../utils/sizes'
import { FontSize } from '../../../../utils/fontSize'
import { getLabel } from '../../../../utils/commons'
import { Icon } from '../../../../themes/Icons/IconCustom'

const Lesson = (props: any) => {
	let lessonData = props.lessonTitle + props.lessonCount + '- ' + props.content;
	return (
		<TouchableOpacity
			style={{
				marginTop: 20
			}}
			onPress={()=> props?.handleLessonPress({lessonData})}
		>
			<HStack>
				<View
					width={maxWidthActually * 0.03}
					backgroundColor={
						props.type == 'break' ?
							systemColor(UIColor.careful1) :
							systemColor(UIColor.accent)
					}
					borderLeftRadius={10}
				/>
				<HStack
					flex={18}
					backgroundColor={
						props.type == 'break' ?
							systemColor(UIColor.careful4) :
							systemColor(UIColor.accent9)
					}
					padding={defaultPaddingHorizontal}
					alignItems='center'
					justifyContent='space-between'
					borderRightRadius={10}
				>
					<VStack>
						<Text
							style={
								props.type == 'break' ?
									styles.break : styles.not_break
							}
						>{props.lessonTitle}{props.lessonCount}{props.time}</Text>
						<Text>{props.content}</Text>
					</VStack>
					{props.type == 'break' ? undefined :
						<Icon
							name='angle-right'
							size={40}
							color={systemColor(UIColor.accent)}
						/>
					}
				</HStack>
			</HStack>
		</TouchableOpacity>
	)
}

export default Lesson
const styles = StyleSheet.create({
	break: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.careful1)

	},
	not_break: {
		fontSize: FontSize.h5,
		color: systemColor(UIColor.accent)
	},
})


