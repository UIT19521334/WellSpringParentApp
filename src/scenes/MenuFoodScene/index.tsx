import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, HStack, Center, VStack } from 'native-base'
import { getLabel } from '../../utils/commons'
import { systemColor, UIColor } from '../../utils/colors'
import { FontSize } from '../../utils/fontSize'
import { Icon } from '../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxHeightActually, maxWidthActually } from '../../utils/sizes'
import { useNavigation } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import Global from '../../Global'
import MenuComponent from './MenuComponent'
import Breakfast from '../../assets/json/breakfast.json';
import Lunch from '../../assets/json/lunch.json';
import Snack from '../../assets/json/snack.json';
const MenuFoodScene = () => {
	const navigation = useNavigation();
	const [isNull, setIsNull] = useState<true | false>(false);
	// Day select
	const [day, setDay] = useState<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>('TUESDAY');

	// handleChangeDay
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
								fontSize: FontSize.h3,
								fontWeight: 'bold',
								marginLeft: 10,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('home.label_menu')}
						</Text>
					</HStack>
					<TouchableOpacity
						onPress={()=>navigation.navigate('FoodRegister')}
					>
						<Text
							style={{
								fontSize: FontSize.h5,
								color: systemColor(UIColor.white)
							}}
						>
							{getLabel('welcome.btn_register')}
						</Text>
					</TouchableOpacity>
				</HStack>


			</View>
			<HStack
				paddingTop={4}
				paddingBottom={4}
				alignItems='center'
				justifyContent='space-between'
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
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
			<ScrollView>
				<MenuComponent type='breakfast' data={Breakfast} />
				<View marginTop={2} >
					<MenuComponent type='lunch' data={Lunch} />
				</View>
				<View marginTop={2} >
					<MenuComponent type='snack' data={Snack} />
				</View>
				<View height={"80"} />
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

export default MenuFoodScene
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
	}
})