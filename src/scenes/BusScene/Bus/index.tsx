import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { View, HStack, Button, VStack, Center } from 'native-base';
import { Icon } from '../../../themes/Icons/IconCustom';
import { systemColor, UIColor } from '../../../utils/colors';
import { defaultPaddingHorizontal, maxHeightActually, maxWidthActually } from '../../../utils/sizes';
import { FontSize } from '../../../utils/fontSize';
import Global from '../../../Global';
import { getLabel } from '../../../utils/commons';
import Lesson from '../../HomeScene/HomeSchedule/Lesson';
import Lessondetail from '../../HomeScene/HomeSchedule/LessonDetail';
import DateTimePicker from '@react-native-community/datetimepicker';
import BusComponent from './BusComponent';

const Bus = () => {

	// bus information 
	const [information, setInformation] = useState<true|false>(true);

	// Day select
	const [day, setDay] = useState<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>('TUESDAY');

	// handleChangeDay
	const handleChangeDay = React.useCallback((day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY') => {
		switch (day) {
			case 'MONDAY':
				setInformation(true);
				break;

			case 'TUESDAY':
				setInformation(false);
				break;

			case 'WEDNESDAY':
				setInformation(true);
				break;

			case 'THURSDAY':
				setInformation(false);
				break;

			case 'FRIDAY':
				setInformation(true);
				break;

			case 'SATURDAY':
				setInformation(false);
				break;

		}
		setDay(day)
	}, [day]);

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
	const handlehandleChangeDay = (value: string) => {
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
					onPress={() => handlehandleChangeDay('down')}
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
					onPress={() => handlehandleChangeDay('up')}
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
			<Center
				backgroundColor={systemColor(UIColor.white)}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
			<HStack
				space={6}
				alignItems='center'
				justifyContent='space-between'
				paddingTop={2}
				paddingBottom={4}
			>
				<TouchableOpacity
					onPress={() => handleChangeDay('MONDAY')}
					style={day == 'MONDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'MONDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_mon')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay('TUESDAY')}
					style={day == 'TUESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'TUESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_tue')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay('WEDNESDAY')}
					style={day == 'WEDNESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'WEDNESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_wed')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay('THURSDAY')}
					style={day == 'THURSDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'THURSDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_thu')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay('FRIDAY')}
					style={day == 'FRIDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'FRIDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_fri')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay('SATURDAY')}
					style={day == 'SATURDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'SATURDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_sat')}
					</Text>
				</TouchableOpacity>
			</HStack>
			</Center>
			<View
				marginTop={2}
			>
				<BusComponent isInformation={information}/>
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={startDate}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
			<View 
				backgroundColor={systemColor(UIColor.white)}
				height={maxHeightActually * 0.30}>
			</View>
		</View>
	)
}

export default Bus


const styles = StyleSheet.create({
	attend: {
		color: systemColor(UIColor.accent),
		fontSize:FontSize.h5,
	},
	unattend: {
		color: systemColor(UIColor.useful),
		fontSize:FontSize.h5,
	},
	focus: {
		width: maxWidthActually * 0.1,
		height: maxWidthActually * 0.1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: systemColor(UIColor.accent),
		borderRadius: 1000
	},
	unfocus: {
		width: maxWidthActually * 0.1,
		height: maxWidthActually * 0.1,
		alignItems:'center',
		justifyContent:'center',
	},
	focusText: {
		color: systemColor(UIColor.white),
		fontSize: FontSize.h5
	},
	unfocusText: {
		color: systemColor(UIColor.black),
		fontSize: FontSize.h5
	}

})