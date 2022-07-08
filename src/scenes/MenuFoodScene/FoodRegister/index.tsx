import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, HStack, Center, VStack, Input, Radio } from 'native-base'
import { getLabel } from '../../../utils/commons'
import { systemColor, UIColor } from '../../../utils/colors'
import { FontSize } from '../../../utils/fontSize'
import { Icon } from '../../../themes/Icons/IconCustom'
import {
	defaultPaddingHorizontal, headerAbsoluteHeight,
	maxHeightActually, maxWidthActually
} from '../../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import Global from '../../../Global'
import MenuComponent from '../MenuComponent'
import mealData from '../../../assets/json/meal.json';

const FoodOption = (props: any) => {
	const type = props.type;
	const startDate = props.startDate;
	const endDate = props.endDate;
	const [value, setValue] = React.useState("one");
	useEffect(() => {
		if (props.type == 1){

		}
	  return;
	}, [])
	return (
		<View>
			<Text style={[styles.title, { fontStyle: 'italic', marginTop: 16 }]}>
				{'Tuần '}{type}{' ('}{startDate}{' - '}{endDate}{'):'}
			</Text>
			<Radio.Group
				name="myRadioGroup"
				accessibilityLabel="favorite number"
				value={value}
				onChange={nextValue => {
					setValue(nextValue);
				}}
			>
				<HStack
					marginTop={3}
					alignItems='center'
					space={8}
				>

					<Radio value="one" my={1}>
						Thực đơn Á
					</Radio>
					<Radio value="two" my={1}>
						Thực đơn Âu
					</Radio>
				</HStack>
			</Radio.Group>
		</View>
	)
}

const FoodRegister = () => {
	const navigation = useNavigation();
	const [isNull, setIsNull] = useState<true | false>(false);
	// Day select
	const [day, setDay] = useState<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>('TUESDAY');

	// handleChangeDay
	const [pos , setPos] = useState<number>(1);
	const handleChangeDay = React.useCallback((day) => {
		switch (day) {
			case 1:
				setPos(0);
				setDay('MONDAY');
				break;

			case 2:
				setPos(1);
				setDay('TUESDAY');
				break;

			case 3:
				setPos(2);
				setDay('WEDNESDAY');
				break;

			case 4:
				setPos(3);
				setDay('THURSDAY');
				break;

			case 5:
				setPos(4);
				setDay('FRIDAY');
				break;

			case 6:
				setPos(5);
				setDay('SATURDAY');
				break;

		}

	}, [day]);

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

	const handleChangeDate = (curr: any) => {
		var first = curr.getDate() - curr.getDay() + 1;
		var last = first + 5;
		let day = new Date(curr);
		let day2 = new Date(curr);
		day.setDate(first);
		setStartDate(day);
		day2.setDate(last);
		setEndDate(day2);
	};

	const showDatepicker = () => {
		setShow(true);
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

	// Data
	const [student, setStudent] = useState<String>('Nguyễn Phương Anh -  2A3');
	const [registeredMeal, setRegisteredMeal] = useState<String>('Bữa sáng, Bữa trưa, Bữa phụ');

	// Get lisst date
	const [listWeek, setlistWeek] = useState<any>([]);
	useEffect(() => {
		const listDate: any[] = [];
		let date = new Date;
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let i = 0;
		let dateStr = month + "/1/" + year;
		const dateStart = new Date(dateStr);
		let last = dateStart.getDate() - dateStart.getDay() + 6;
		let dateEnd = new Date(dateStr);
		dateEnd.setDate(last);
		while (i < 10){
			listDate[i] = Global.formatDate(dateStart);
			listDate[i+1] = Global.formatDate(dateEnd);
			dateStart.setDate(dateEnd.getDate() + 2 );
			dateEnd.setDate(dateStart.getDate() - dateStart.getDay() + 6);
			
			i = i +2;
		}
		const dateFinish = new Date(year,month,0);
		if ( dateEnd.getDate() > month){
			listDate[9] = Global.formatDate(dateFinish);
		}
		
		setlistWeek(listDate);
		console.log(dateFinish);
	  return;
	}, []);

	return (
		<View>
			<View
				backgroundColor={systemColor(UIColor.accent)}
				height={headerAbsoluteHeight}
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<HStack
					justifyContent='space-between'
					alignItems='center'
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
								fontSize: FontSize.h4,
								fontWeight: 'bold',
								marginLeft: 10,
								maxWidth: maxWidthActually * 0.8,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('meal.title_register')} {'tháng 7'}
						</Text>
					</HStack>

				</HStack>
			</View>
			<ScrollView>
				<View
					backgroundColor={systemColor(UIColor.white)}
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
				>
					<Text style={[styles.titlle2, { marginTop: 20 }]}>{getLabel('onleave.title_student')}</Text>
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
					<Text style={[styles.titlle2, { marginTop: 20 }]}>{getLabel('meal.label_registered_menu')}</Text>
					<FoodOption
						type={1} 
						startDate = {listWeek[0]} 
						endDate = {listWeek[1]} 
					/>
					<FoodOption type={2} 
						startDate = {listWeek[2]} 
						endDate = {listWeek[3]} 
					/>
					<FoodOption type={3} 
						startDate = {listWeek[4]} 
						endDate = {listWeek[5]} 
					/>
					<FoodOption type={4} 
						startDate = {listWeek[6]} 
						endDate = {listWeek[7]} 
					/>
					<FoodOption type={5} 
						startDate = {listWeek[8]} 
						endDate = {listWeek[9]} 
					/>
					<Text style={[styles.titlle2, { marginTop: 20 }]}>{getLabel('meal.label_registered_meal')}</Text>
					<View paddingBottom={8} >
					<Input
						size='lg'
						variant="underlined"
						value={registeredMeal}
						onChangeText={(value) => {
							setRegisteredMeal(value);
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
					</View>
				</View>

				<HStack
					marginTop={2}
					paddingTop={4}
					paddingBottom={4}
					alignItems='center'
					justifyContent='space-between'
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					backgroundColor={systemColor(UIColor.white)}
				>
					<TouchableOpacity
						onPress={() => handlehandleChangeDay('down')}
						style={{
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 1000,
							borderWidth: 1,
							borderColor: systemColor(UIColor.black8),
							backgroundColor: systemColor(UIColor.white)
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
							borderWidth: 1,
							borderColor: systemColor(UIColor.black8),
							backgroundColor: systemColor(UIColor.white)
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
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					backgroundColor={systemColor(UIColor.white)}
				>
					<HStack
						space={6}
						alignItems='center'
						justifyContent='space-between'
						paddingTop={2}
						paddingBottom={4}
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
				</Center>

				<MenuComponent type='breakfast' data={mealData[pos].breakfast} />
				<MenuComponent type='lunch' data={mealData[pos].breakfast} />
				<MenuComponent type='snack' data={mealData[pos].breakfast} />
				<View height={"48"} />

			</ScrollView>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={thisDate}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
		</View>
	)
}

export default FoodRegister
const styles = StyleSheet.create({
	attend: {
		color: systemColor(UIColor.accent),
		fontSize: FontSize.h5,
	},
	unattend: {
		color: systemColor(UIColor.useful),
		fontSize: FontSize.h5,
	},
	focus: {
		width: maxWidthActually * 0.1,
		height: maxWidthActually * 0.1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: systemColor(UIColor.accent),
		borderRadius: 1000
	},
	unfocus: {
		width: maxWidthActually * 0.1,
		height: maxWidthActually * 0.1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	focusText: {
		color: systemColor(UIColor.white),
		fontSize: FontSize.h5
	},
	unfocusText: {
		color: systemColor(UIColor.black),
		fontSize: FontSize.h5
	},
	title: {
		color: systemColor(UIColor.black),
		fontSize: FontSize.h5,
		fontWeight: 'bold'
	},
	titlle2: {
		color: systemColor(UIColor.black3),
		fontSize: FontSize.h5,
	}
})