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
import LearningProgram from './LearingProgram'

const LearningOutcomes = () => {
	const navigation = useNavigation();
	const [isScreen, setIsBus] = useState<true | false>(false)
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
						{getLabel('learning.title_learning_outcomes')}
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
						style={isScreen ? styles.btn_unfocus : styles.btn_focus}
					>
						<Text
							style={isScreen ? styles.text_unfocus : styles.text_focus}
						>
							{getLabel('learning.label_overall_scoreboard')}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setIsBus(true)}
						style={isScreen ? styles.btn_focus : styles.btn_unfocus}
					>
						<Text
							style={isScreen ? styles.text_focus : styles.text_unfocus}
						>
							{getLabel('learning.label_subject_score_sheet')}
						</Text>
					</TouchableOpacity>
				</HStack>
			</View>
			<View
				backgroundColor={systemColor(UIColor.positive4)}
				padding={2}
				paddingLeft={defaultPaddingHorizontal}

			>
				<Text style={[styles.text_focus, { fontSize: FontSize.h4 }]} >Năm 2020 -  2021</Text>
			</View>
			<ScrollView>

				<HStack
					justifyContent='space-between'
					alignItems='center'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
				>
					<LearningProgram type={true} semester={'giữa HKI'} />
					<LearningProgram type={true} semester={'giữa HKII'} />
				</HStack>

				<HStack
					justifyContent='space-between'
					alignItems='center'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
				>
					<LearningProgram type={true} semester={'cuối HKI'} />
					<LearningProgram type={true} semester={'cuối HKII'} />
				</HStack>

				<HStack
					justifyContent='space-between'
					alignItems='center'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
				>
					<LearningProgram type={false} semester={'giữa HKI'} />
					<LearningProgram type={false} semester={'giữa HKII'} />
				</HStack>
				<HStack
					justifyContent='space-between'
					alignItems='center'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
				>
					<LearningProgram type={false} semester={'cuối HKI'} />
					<LearningProgram type={false} semester={'cuối HKII'} />
				</HStack>

			</ScrollView>
		</View>
	)
}

export default LearningOutcomes
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