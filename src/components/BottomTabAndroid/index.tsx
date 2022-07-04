import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getLabel } from '../../utils/commons';
import { Icon } from '../../themes/Icons/IconCustom';
import { HStack, VStack, View, Center, Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { maxWidthActually, maxHeightActually, defaultPaddingHorizontal } from '../../utils/sizes';
import { systemColor, UIColor } from '../../utils/colors';
import Svg, { Path } from 'react-native-svg';
import { FontSize } from '../../utils/fontSize';
import * as shape from 'd3-shape';

// draw path function
const getPath = (width: number, height: number, centerWidth: number, borderTopLeftRight: boolean = false) => {
	const circleWidth = centerWidth + 16;
	const left = shape
		.line()
		.x((d) => d.x)
		.y((d) => d.y)([
			{ x: 0, y: 0 },
			// { x: width, y: 0 },
		]);

	const borderTopLeft = borderTopLeftRight ? [
		{ x: 0 - 10, y: 0 }, // end left
		{ x: 0 - 10, y: height },
		{ x: 0, y: height },

		{ x: 0, y: 20 }, // border left
		{ x: 0 + 2, y: 10 },
		{ x: 0 + 10, y: 2 },
		{ x: 0 + 20, y: 0 },
	] : [];

	const borderTopRigth = borderTopLeftRight ? [
		{ x: width - 20, y: 0 }, //border right
		{ x: width - 10, y: 2 },
		{ x: width - 2, y: 10 },
		{ x: width, y: 20 },
		{ x: width, y: 0 },

		{ x: width, y: height }, // end left
		{ x: width + 10, y: height },
		{ x: width + 10, y: 0 },
	] : [];

	const tab = shape
		.line()
		.x((d) => d.x)
		.y((d) => d.y)
		.curve(shape.curveBasis)([
			...borderTopLeft,

			{ x: (width - circleWidth) / 2 - 20, y: 0 }, // border center left
			{ x: (width - circleWidth) / 2 - 10, y: 2 },
			{ x: (width - circleWidth) / 2 - 2, y: 12 },
			{ x: (width - circleWidth) / 2, y: 14 },

			{ x: width / 2 - circleWidth / 2 + 8, y: height / 2 + 2 },
			{ x: width / 2 - 10, y: height / 2 + 10 },
			{ x: width / 2, y: height / 2 + 10 },
			{ x: width / 2 + 10, y: height / 2 + 10 },
			{ x: width / 2 + circleWidth / 2 - 8, y: height / 2 + 2 },

			{ x: (width - circleWidth) / 2 + circleWidth, y: 14 }, // border center right
			{ x: (width - circleWidth) / 2 + circleWidth + 2, y: 12 },
			{ x: (width - circleWidth) / 2 + circleWidth + 10, y: 2 },
			{ x: (width - circleWidth) / 2 + circleWidth + 20, y: 0 },

			...borderTopRigth
		]);

	const right = shape
		.line()
		.x((d) => d.x)
		.y((d) => d.y)([
			{ x: width + circleWidth, y: 0 },
			{ x: width * 2, y: 0 },
			{ x: width * 2, y: height },
			{ x: 0, y: height },
			{ x: 0, y: 0 },
		]);
	return `${left} ${tab} ${right}`;
};

const BottomTabAndroid = () => {

	let boderHeight = 70;
	const [tabSelected, setTabSelected] = React.useState<'HOME' | 'CONTACT' | 'NOTIFICATION' | 'ACCOUNT'>('HOME');
	const d = getPath(maxWidthActually, boderHeight, 60, true);
	const navigation = useNavigation()
	// handleChageTab
	const handleChangeTab = React.useCallback((tab: 'HOME' | 'CONTACT' | 'NOTIFICATION' | 'ACCOUNT' | 'CHANGE_STUDENT') => {

		if (tab == 'CHANGE_STUDENT') {
		}
		else {
			switch (tab) {
				case 'ACCOUNT':
					navigation.navigate('AccountScene');
					break;
				case 'CONTACT':
					navigation.navigate('ContactScene');
					break;
				case 'NOTIFICATION':
					navigation.navigate('NotificationScene');
					break;

				default:
					navigation.navigate('HomeScene');
					break;
			}
			setTabSelected(tab)
		}
	}, [tabSelected]);
	return (
		<View
			position='absolute'
			bottom={0}
		>
			<Center
				style={{
					marginBottom: -40
				}}
			>
				<Button
					variant='unstyled'
					backgroundColor={systemColor(UIColor.accent1)}
					borderRadius={1000}
					style={{
						position:'absolute',
						bottom: 10
					}}
				>
					<Icon
						name='user'
						size={30}
						color={systemColor(UIColor.white)}
						style={{
							padding: 10,
						}}
					/>
				</Button>
			</Center>

			{/* Create a bottom view */}
			<View>
				<Svg width={maxWidthActually} height={boderHeight} >
					<Path
						fill={systemColor(UIColor.white)}
						stroke={systemColor(UIColor.black8)}
						strokeWidth={1} {...{ d }}
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeDasharray={[0, (maxWidthActually * .2 - 24 > 55 ? 54 : 52), 0]}
						strokeDashoffset={12}
					/>
				</Svg>
			</View>

			<Center
				style={{
					position: 'absolute',
					bottom: -10
				}}
			>
				<HStack
					padding={5}
					width={maxWidthActually}

					justifyContent='space-between'
					alignItems='flex-end'

				>
					<TouchableOpacity
						onPress={() => handleChangeTab('HOME')}
					>
						<VStack space={2} alignItems='center'>
							<Icon
								name='home'
								size={20}
								color={ tabSelected == 'HOME' ? systemColor(UIColor.accent) : systemColor(UIColor.black3) }
							/>
							<Text
								style={{
									fontSize: FontSize.h8,
									color: tabSelected == 'HOME' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)
								}}
							>{getLabel('bottom_tab.tab_home')}</Text>
						</VStack>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleChangeTab('CONTACT')}
					>
						<VStack space={2} alignItems='center'>
							<Icon
								name='headset'
								size={20}
								color={tabSelected == 'CONTACT' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)}

							/>
							<Text
								style={{
									fontSize: FontSize.h8,
									color: tabSelected == 'CONTACT' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)
								}}
							>{getLabel('bottom_tab.tab_contact')}</Text>
						</VStack>
					</TouchableOpacity>
					<VStack alignItems='center' >

						<Text
							style={{
								fontSize: FontSize.h8,
								color: systemColor(UIColor.black3)
							}}
						>   Phương Anh</Text>
					</VStack>
					<TouchableOpacity
						onPress={() => handleChangeTab('NOTIFICATION')}
					>
						<VStack
							space={2}
							alignItems='center'>
							<Icon

								name='bell'
								size={20}
								color={tabSelected == 'NOTIFICATION' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)}
							/>
							<Text
								style={{
									fontSize: FontSize.h8,
									color: tabSelected == 'NOTIFICATION' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)
								}}
							>{getLabel('bottom_tab.tab_notification')}</Text>
						</VStack>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleChangeTab('ACCOUNT')}
					>
						<VStack space={2} alignItems='center'>
							<Icon
								name='user'
								size={20}
								color={tabSelected == 'ACCOUNT' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)}

							/>
							<Text
								style={{
									fontSize: FontSize.h8,
									color: tabSelected == 'ACCOUNT' ? systemColor(UIColor.accent) : systemColor(UIColor.black3)
								}}
							>{getLabel('bottom_tab.tab_account')}</Text>
						</VStack>
					</TouchableOpacity>
				</HStack>
			</Center>
		</View>
	)
}

export default BottomTabAndroid