import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { View, HStack, Button } from 'native-base';
import { Icon } from '../../../themes/Icons/IconCustom';
import { systemColor, UIColor } from '../../../utils/colors';
import { maxHeightActually, maxWidthActually } from '../../../utils/sizes';
import { FontSize } from '../../../utils/fontSize';
import Global from '../../../Global';
import { getLabel } from '../../../utils/commons';
import Lesson from './Lesson';
import Lessondetail from './LessonDetail';
import DateTimePicker from '@react-native-community/datetimepicker';
const HomeSchedule = () => {

	// Day select
	const [day, setDay] = useState<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>('TUESDAY');

	const handleChangeDay = React.useCallback((day) => {
		switch (day) {
			case 1:
				setDay('MONDAY');
				break;

			case 2:
				setDay('TUESDAY');
				break;

			case 3:
				setDay('WEDNESDAY');
				break;

			case 4:
				setDay('THURSDAY');
				break;

			case 5:
				setDay('FRIDAY');
				break;

			case 6:
				setDay('SATURDAY');
				break;

		}
		
	}, [day]);

	// handleModel
	const [showLesson, setShowLesson] = useState<true | false>(false);
	const handleClose = () => {
		setShowLesson(false);
	}

	// handleLesson
	const [lesson, setLesson] = useState<String | null>('');
	const handleLessonPress = (value: any) => {
		setShowLesson(true);
		setLesson(value.lessonData);
	}

	// datetime picker
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [startDate, setStartDate] = useState(new Date("07/04/2022"));
	const [endDate, setEndDate] = useState(new Date("07/09/2022"));
	const [thisDate, setThisDate] = useState(new Date);

	const onChange = (event: any, selectedDate: any) => {
		const curr = selectedDate;
		setShow(false);
		setThisDate(curr);
		handleChangeDate(curr);
		handleChangeDay(curr.getDay())
	};
	const handleChangeDate = (curr: any) =>{
		var first = curr.getDate() - curr.getDay() + 1; 
		var last = first + 5;
		let day = new Date(curr);
		let day2 = new Date(curr);
		day.setDate(first);
		setStartDate(day);
		day2.setDate(last);
		setEndDate(day2);
	}
	const showDatepicker = () => {
		setShow(true);
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
	useEffect(() => {
		handleChangeDate(thisDate);
		handleChangeDay(thisDate.getDay())
	  return;
	}, []);
	return (
		<View>
			<HStack
				marginTop={4}
				alignItems='center'
				justifyContent='space-between'
			>
				<TouchableOpacity
					onPress={() => handleSetDay('down')}
					style={{
						paddingLeft: 10,
						paddingRight: 10,
						borderRadius: 1000,
						backgroundColor: systemColor(UIColor.black9)
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
							fontSize: FontSize.h5,
							fontWeight: 'bold',
							color: systemColor(UIColor.black)
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
						backgroundColor: systemColor(UIColor.black9)
					}}
				>
					<Icon
						name='angle-right'
						size={30}
						color={systemColor(UIColor.accent)}
					/>
				</TouchableOpacity>
			</HStack>
			<HStack
				space={6}
				alignItems='center'
				justifyContent='space-between'
				marginTop={2}
			>
				<TouchableOpacity
					onPress={() => handleChangeDay(1)}
					style={day == 'MONDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'MONDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_mon')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay(2)}
					style={day == 'TUESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'TUESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_tue')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay(3)}
					style={day == 'WEDNESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'WEDNESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_wed')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay(4)}
					style={day == 'THURSDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'THURSDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_thu')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay(5)}
					style={day == 'FRIDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'FRIDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_fri')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleChangeDay(6)}
					style={day == 'SATURDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'SATURDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_sat')}
					</Text>
				</TouchableOpacity>
			</HStack>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 1: '}
				time={'08:00 - 08:40'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 2: '}
				time={'08:45 - 09:25'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 3: '}
				time={'09:35 - 10:15'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 4: '}
				time={'10:20 - 11:00'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 5: '}
				time={'11:10 - 11:50'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				type={'break'}
				time={'11:50 - 12:45'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 6: '}
				time={'12:50 - 13:30'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 7: '}
				time={'13:35 - 14:45'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				type={'break'}
				time={'14:15 - 14:30'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 8: '}
				time={'14:30 - 15:10'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				handleLessonPress={handleLessonPress}
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 9: '}
				time={'15:15 - 15:55'}
				content={'Luyen tu va va'}
			/>
			<Lessondetail
				title={lesson}
				isShow={showLesson}
				handleClose={handleClose}
			/>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={thisDate}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
			<View height={maxHeightActually * 0.30}>
			</View>
		</View>
	)
}

export default HomeSchedule


const styles = StyleSheet.create({
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