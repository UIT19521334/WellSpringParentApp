import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { View, HStack, ScrollView, Input, VStack, Select, CheckIcon } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { getLabel } from '../../../utils/commons'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, HeightDevice, maxHeightActually, maxWidthActually } from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import DateTimePicker from '@react-native-community/datetimepicker';
import Global from '../../../Global'
import AntDesign from 'react-native-vector-icons/AntDesign';
const CreateLeave = () => {
	const [student, setStudent] = useState<String>('Nguyễn Phương Anh -  2A3');
	const [lesson, setLesson] = useState<String>('Tiết 1, Tiết 2, Tiết 3');
	const [reason, setReason] = useState<String>('Dịch covid');
	const [dateStart, setdateStart] = useState<Date>(new Date);
	const [dateEnd, setdateEnd] = useState<Date>(new Date);
	const navigation = useNavigation();

	// datetime picker
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow(false);
		setdateStart(currentDate);
	};
	const onChange2 = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow2(false);
		setdateEnd(currentDate);
	};

	const showDatepicker = () => {
		setShow(true);
	};
	const showDatepicker2 = () => {
		setShow2(true);
	};

	// selectiom
	const [service, setService] = useState('');
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

					<Text
						style={{
							fontSize: FontSize.h3,
							fontWeight: 'bold',
							marginLeft: 10,
							color: systemColor(UIColor.white)
						}}
					>
						{getLabel('onleave.label_create_onleave')}
					</Text>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								marginLeft: 10,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('common.btn_cancel')}
						</Text>
					</TouchableOpacity>
				</HStack>
			</View>
			<ScrollView
				height={HeightDevice - headerAbsoluteHeight}
				backgroundColor={systemColor(UIColor.white)}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<Text style={[styles.titlle, { marginTop: 20 }]}>{getLabel('onleave.title_student')}</Text>
				<Input
					size='lg'
					variant="underlined"
					value={student}
					onChangeText={(value) => {
						setStudent(value);
					}}
					InputRightElement={
						<TouchableOpacity

						>
							<Icon
								name='search'
								size={20}
								color={systemColor(UIColor.black5)}
							/>
						</TouchableOpacity>
					}
				/>
				<HStack
					marginTop={4}
					justifyContent='space-between'
					alignItems='center'
				>
					<VStack
						justifyContent='space-between'
						width={maxWidthActually * 0.4}
					>
						<Text style={styles.titlle}>{getLabel('onleave.title_onleave_from')}</Text>
						<Input
							size='lg'
							variant="underlined"
							value={Global.formatDate(dateStart)}
							InputRightElement={
								<TouchableOpacity
									onPress={showDatepicker}
								>
									<Icon
										name='calendar-day'
										size={20}
										color={systemColor(UIColor.black5)}
									/>
								</TouchableOpacity>
							}
						/>
					</VStack>
					<VStack
						justifyContent='space-between'
						width={maxWidthActually * 0.4}
					>
						<Text style={styles.titlle}>{getLabel('onleave.title_onleave_to')}</Text>
						<Input
							size='lg'
							variant="underlined"
							value={Global.formatDate(dateEnd)}
							InputRightElement={
								<TouchableOpacity onPress={showDatepicker2} >
									<Icon
										name='calendar-day'
										size={20}
										color={systemColor(UIColor.black5)}
									/>
								</TouchableOpacity>
							}
						/>
					</VStack>
				</HStack>
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_style')}</Text>
				<Select
					variant="underlined" // why this not working in react native CLI
					selectedValue={service}
					size='lg'
					placeholder="Nghỉ cả ngày"
					placeholderTextColor={systemColor(UIColor.black)}
					_selectedItem={{
						bg: "teal.100",
						endIcon: <CheckIcon size={4} />
					}}
					mt={1}
					onValueChange={itemValue => setService(itemValue)}

				>
					<Select.Item label="Nghỉ cả ngày" value="ux" />
					<Select.Item label="Nghỉ một buổi" value="web" />
					<Select.Item label="Nghỉ 2 tiếng" value="cross" />
					<Select.Item label="Nghỉ không hết" value="ui" />
					<Select.Item label="Nghỉ luôn" value="backend" />
				</Select>
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_lesson')}</Text>
				<Input
					size='lg'
					variant="underlined"
					value={lesson}
					onChangeText={(value) => {
						setLesson(value);
					}}
					InputRightElement={
						<TouchableOpacity>
							<Icon
								name='search'
								size={20}
								color={systemColor(UIColor.black5)}
							/>
						</TouchableOpacity>
					}
				/>
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_reason')}</Text>
				<Input
					size='lg'
					variant="underlined"
					value={reason}
					onChangeText={(value) => {
						setReason(value);
					}}
				/>
				<Text style={[styles.titlle, { marginTop: 16 }]}>{getLabel('onleave.title_onleave_attach')}</Text>
				<HStack>
					<Image source={require('../../../assets/images/demo.jpg')}
						style={{
							width: maxWidthActually *0.28,
							resizeMode: 'contain',
							maxHeight: maxWidthActually *0.28
						}}
					/>
				</HStack>
			</ScrollView>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={dateStart}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
			{show2 && (
				<DateTimePicker
					testID="dateTimePicker"
					value={dateEnd}
					is24Hour={true}
					onChange={onChange2}
				/>
			)}
		</View>
	)
}

export default CreateLeave
const styles = StyleSheet.create({
	titlle: {
		color: systemColor(UIColor.black3),
		fontSize: FontSize.h5,
	}
})