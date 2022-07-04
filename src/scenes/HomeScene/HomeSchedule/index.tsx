import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import { View, HStack } from 'native-base'
import { Icon } from '../../../themes/Icons/IconCustom'
import { systemColor, UIColor } from '../../../utils/colors'
import { maxHeightActually } from '../../../utils/sizes'
import { FontSize } from '../../../utils/fontSize'
import Global from '../../../Global'
import { getLabel } from '../../../utils/commons'
import Lesson from './Lesson'
const HomeSchedule = () => {

	const [weekDay, setWeekDay] = useState(1);

	// setWeekDay
	const setWeekDayUp = () => {
		setWeekDay(weekDay + 1)
	}
	const setWeekDayDown = () => {
		setWeekDay(weekDay - 1)
	}
	let week = [
		'27/06/2022 - 02/07/2022',
		'04/07/2022 - 09/07/2022',
		'11/07/2022 - 16/07/2022'
	];

	// Day select
	const [day, setDay] = useState<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>('TUESDAY');

	const handleChangeDay = React.useCallback((day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY') => {
		switch (day) {
			case 'MONDAY':
				console.log("MONDAY")
				break;

			case 'TUESDAY':
				console.log("TUESDAY")
				break;

			case 'WEDNESDAY':
				console.log("WEDNESDAY")
				break;

			case 'THURSDAY':
				console.log("THURSDAY")
				break;

			case 'FRIDAY':
				console.log("FRIDAY")
				break;

			case 'SATURDAY':
				console.log("SATURDAY")
				break;

		}
		setDay(day)
	}, [day]);

	return (
		<View>
			<HStack
				marginTop={4}
				alignItems='center'
				justifyContent='space-between'
			>
				<TouchableOpacity
					onPress={() => setWeekDayDown()}
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
				<Text
					style={{
						fontSize: FontSize.h5,
						fontWeight: 'bold',
						color: systemColor(UIColor.black)
					}}
				>
					{week[weekDay]}
				</Text>
				<TouchableOpacity
					onPress={() => setWeekDayUp()}
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
					onPress={() => setDay('MONDAY')}
					style={day == 'MONDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'MONDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_mon')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDay('TUESDAY')}
					style={day == 'TUESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'TUESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_tue')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDay('WEDNESDAY')}
					style={day == 'WEDNESDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'WEDNESDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_wed')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDay('THURSDAY')}
					style={day == 'THURSDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'THURSDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_thu')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDay('FRIDAY')}
					style={day == 'FRIDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'FRIDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_fri')}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDay('SATURDAY')}
					style={day == 'SATURDAY' ? styles.focus : styles.unfocus}
				>
					<Text style={day == 'SATURDAY' ? styles.focusText : styles.unfocusText}>
						{getLabel('home.label_sat')}
					</Text>
				</TouchableOpacity>
			</HStack>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 1: '}
				time={'08:00 - 08:40'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 2: '}
				time={'08:45 - 09:25'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 3: '}
				time={'09:35 - 10:15'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 4: '}
				time={'10:20 - 11:00'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 5: '}
				time={'11:10 - 11:50'}
				content={'Luyen tu va va'}
			/>
			<Lesson

				type={'break'}
				time={'11:50 - 12:45'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 6: '}
				time={'12:50 - 13:30'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 7: '}
				time={'13:35 - 14:45'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				type={'break'}
				time={'14:15 - 14:30'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 8: '}
				time={'14:30 - 15:10'}
				content={'Luyen tu va va'}
			/>
			<Lesson
				lessonTitle={getLabel('home.label_lesson')}
				lessonCount={' 9: '}
				time={'15:15 - 15:55'}
				content={'Luyen tu va va'}
			/>
			<View
				height={maxHeightActually*0.28}
			>
			</View>
		</View>
	)
}

export default HomeSchedule


const styles = StyleSheet.create({
	focus: {
		padding: 5,
		backgroundColor: systemColor(UIColor.accent),
		borderRadius: 1000
	},
	unfocus: {
		padding: 5,
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