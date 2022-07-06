import { Text } from 'react-native'
import React from 'react'
import { View, Center, Image, HStack, VStack } from 'native-base';
import { systemColor, UIColor } from '../../../../utils/colors';
import { defaultPaddingHorizontal, maxHeightActually, maxWidthActually } from '../../../../utils/sizes'
import { FontSize } from '../../../../utils/fontSize';
import { getLabel } from '../../../../utils/commons';
import { Icon } from '../../../../themes/Icons/IconCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BusComponent = (props: any) => {
	return (
		<View>
			{
				!props.isInformation ?
					<Center
						backgroundColor={systemColor(UIColor.white)}
						paddingLeft={defaultPaddingHorizontal}
						paddingRight={defaultPaddingHorizontal}
						height={maxHeightActually * 0.4}
					>
						<Image source={require('../../../../assets/images/empty.png')}
							style={{
								width: maxWidthActually * 0.6,
								resizeMode: 'contain',
							}}
						/>
						<Text
							style={{
								marginTop: 10,
								fontSize: FontSize.h5,
								fontWeight: 'bold',
								color: systemColor(UIColor.black)
							}}
						>
							{getLabel('bus.label_no_infomation')}
						</Text>
						<Text
							style={{
								marginTop: 20,
								fontSize: FontSize.h5,
								color: systemColor(UIColor.black3),
								textAlign: 'center'
							}}
						>
							{getLabel('bus.label_no_infomation_detail')}
						</Text>
					</Center>
					:
					<View>
						<View
							backgroundColor={systemColor(UIColor.white)}
							paddingLeft={defaultPaddingHorizontal}
							paddingRight={defaultPaddingHorizontal}
							paddingBottom={6}
						>
							<HStack
								marginTop={5}
								space={2}
								alignItems='center'
							>
								<Text
									style={{
										fontSize: FontSize.h4,
										fontWeight: 'bold',
										color: systemColor(UIColor.accent)
									}}
								>
									{getLabel('bus.label_start')}
								</Text>

								<View
									padding={1}
									borderRadius='full'
									backgroundColor={systemColor(UIColor.accent8)}
								>
									<AntDesign
										name='arrowup'
										color={systemColor(UIColor.accent)}
										size={16}

									/>
								</View>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='center'
							>
								<View
									width={1}
									height={16}
									borderRadius={2}
									backgroundColor={systemColor(UIColor.accent)}

								/>
								<VStack
									marginLeft={2}
									justifyContent='space-between'
									space={2}
								>
									<Text
										style={{
											color: systemColor(UIColor.black),
											fontSize: FontSize.h5,
											fontWeight: 'bold'
										}}
									>{getLabel('bus.label_car')}: 29E - 45678</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>{getLabel('bus.label_monitor')} Lê Đức Anh</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<MaterialIcons
									name='access-time'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_time')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
											width: maxWidthActually * 0.8,
										}}
									>
										22/06/2021
										<Text
											style={{
												color: systemColor(UIColor.black4),
												fontSize: FontSize.h5,
												fontStyle: 'italic',
											}}
										> 7:00</Text> - 22/06/2021 -
										<Text
											style={{
												color: systemColor(UIColor.black4),
												fontSize: FontSize.h5,
												fontStyle: 'italic',
											}}
										> 7:30</Text>
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<Icon
									name='location-arrow'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_location_checkin')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Số 13 đường 37, phường Hiệp Bình Phước quận Thủ Đức
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<Icon
									name='location-arrow'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_location_checkout')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Số 1 đường Võ Văn Tần, phường 1, quận 1, TPHCM
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<AntDesign
									name='filetext1'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_note')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Học sinh vắng. Lí do: Gia đình tự đưa học sinh đến trường
									</Text>
								</VStack>
							</HStack>
						</View>
						<View
							marginTop={2}
							backgroundColor={systemColor(UIColor.white)}
							paddingLeft={defaultPaddingHorizontal}
							paddingRight={defaultPaddingHorizontal}
						>
							<HStack
								marginTop={5}
								space={2}
								alignItems='center'
							>
								<Text
									style={{
										fontSize: FontSize.h4,
										fontWeight: 'bold',
										color: systemColor(UIColor.useful2)
									}}
								>
									{getLabel('bus.label_end')}
								</Text>

								<View
									padding={1}
									borderRadius='full'
									backgroundColor={systemColor(UIColor.useful4)}
								>
									<AntDesign
										name='arrowdown'
										color={systemColor(UIColor.useful2)}
										size={16}

									/>
								</View>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='center'
							>
								<View
									width={1}
									height={16}
									borderRadius={2}
									backgroundColor={systemColor(UIColor.useful2)}

								/>
								<VStack
									marginLeft={2}
									justifyContent='space-between'
									space={2}
								>
									<Text
										style={{
											color: systemColor(UIColor.black),
											fontSize: FontSize.h5,
											fontWeight: 'bold'
										}}
									>{getLabel('bus.label_car')}: 29E - 45678</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>{getLabel('bus.label_monitor')} Lê Đức Anh</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<MaterialIcons
									name='access-time'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_time')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
											width: maxWidthActually * 0.8,
										}}
									>
										22/06/2021
										<Text
											style={{
												color: systemColor(UIColor.black4),
												fontSize: FontSize.h5,
												fontStyle: 'italic',
											}}
										> 16:00</Text> - 22/06/2021 -
										<Text
											style={{
												color: systemColor(UIColor.black4),
												fontSize: FontSize.h5,
												fontStyle: 'italic',
											}}
										> 16:30</Text>
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<Icon
									name='location-arrow'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_location_checkin')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Số 13 đường 37, phường Hiệp Bình Phước quận Thủ Đức
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<Icon
									name='location-arrow'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_location_checkout')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Số 1 đường Võ Văn Tần, phường 1, quận 1, TPHCM
									</Text>
								</VStack>
							</HStack>
							<HStack
								marginTop={5}
								alignItems='flex-start'
							>
								<AntDesign
									name='filetext1'
									size={20}
									color={systemColor(UIColor.black4)}
								/>
								<VStack
									marginLeft={2}
									space={2}
									justifyContent='space-between'
								>
									<Text
										style={{
											color: systemColor(UIColor.black4),
											fontSize: FontSize.h5,
										}}
									>
										{getLabel('bus.label_note')}
									</Text>
									<Text
										style={{
											color: systemColor(UIColor.black),
											width: maxWidthActually * 0.8,
											fontSize: FontSize.h5,
										}}
									>
										Học sinh vắng. Lí do: Gia đình tự đưa học sinh đến trường
									</Text>
								</VStack>
							</HStack>
						</View>
					</View>
			}
		</View>
	)
}

export default BusComponent