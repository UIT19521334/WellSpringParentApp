import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { View, HStack, Button, VStack } from 'native-base';
import { Icon } from '../../../themes/Icons/IconCustom';
import { systemColor, UIColor } from '../../../utils/colors';
import { defaultPaddingHorizontal, maxHeightActually, maxWidthActually } from '../../../utils/sizes';
import { FontSize } from '../../../utils/fontSize';
import Global from '../../../Global';
import { getLabel } from '../../../utils/commons';
import Lesson from '../../HomeScene/HomeSchedule/Lesson';
import Lessondetail from '../../HomeScene/HomeSchedule/LessonDetail';
import DateTimePicker from '@react-native-community/datetimepicker';
import AttendanceModel from './AttendanceModel';
import AttendanceDay from './AttendaceDay';

const Attendance = () => {

	// handleModel
	const [showDetail, setshowDetail] = useState<true | false>(false);
	const handleClose = () => {
		setshowDetail(false);
	}

	// handleTitle
	const [attend, setAttend] = useState<true | false>(true);
	const [title, setTitle] = useState<String | null>('');

	const handleAttend = (value: any, attend: any) => {
		setshowDetail(true);
		setTitle(value);
		setAttend(attend);
	}


	// datetime picker
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [startDate, setStartDate] = useState(new Date("07/04/2022"));
	const [endDate, setEndDate] = useState(new Date("07/09/2022"));

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow(false);
		let day = new Date(currentDate);
		day.setDate(day.getDate() + 5);
		setEndDate(day);
		setStartDate(currentDate);
	};

	const showMode = (currentMode: any) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	// ChangeDay
	const handleSetDay = (value: string) => {
		let day1 = new Date(startDate);
		let day2 = new Date(endDate);
		if (value == 'up') {
			day1.setDate(day1.getDate() + 7);
			setStartDate(day1);
			day2.setDate(day2.getDate() + 7);
			setEndDate(day2);
			return;
		}
		if (value == 'down') {
			day1.setDate(day1.getDate() - 7);
			setStartDate(day1);
			day2.setDate(day2.getDate() - 7);
			setEndDate(day2);
			return;
		}
	}
	return (
		<View>
			<HStack
				paddingTop={4}
				paddingBottom={4}
				alignItems='center'
				justifyContent='space-between'
				backgroundColor={systemColor(UIColor.white)}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<TouchableOpacity
					onPress={() => handleSetDay('down')}
					style={{
						paddingLeft: 10,
						paddingRight: 10,
						borderRadius: 1000,
						backgroundColor: systemColor(UIColor.black8)
					}}
				>
					<Icon
						name='angle-left'
						size={30}
						color={systemColor(UIColor.accent)}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={showDatepicker}
				>
					<Text
						style={{
							fontSize: FontSize.h4,
							fontWeight: 'bold',
							color: systemColor(UIColor.accent)
						}}
					>
						{Global.formatDate(startDate)} - {Global.formatDate(endDate)}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleSetDay('up')}
					style={{
						paddingLeft: 10,
						paddingRight: 10,
						borderRadius: 1000,
						backgroundColor: systemColor(UIColor.black8)
					}}
				>
					<Icon
						name='angle-right'
						size={30}
						color={systemColor(UIColor.accent)}
					/>
				</TouchableOpacity>
			</HStack>
			<AttendanceDay
				handleAttend = {handleAttend}
				day = {'Thứ 6 - 08/07/2022'}
			/>
			<AttendanceDay
				handleAttend = {handleAttend}
				day = {'Thứ 5 - 07/07/2022'}
			/>
			<AttendanceModel
				title={title}
				attend = {attend}
				isShow={showDetail}
				handleClose={handleClose}
			/>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={startDate}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
			<View height={maxHeightActually * 0.30}>
			</View>
		</View>
	)
}

export default Attendance


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