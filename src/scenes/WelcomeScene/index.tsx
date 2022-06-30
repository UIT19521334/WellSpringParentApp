import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { HStack, VStack, Center, Box, Button } from 'native-base'
import {
	maxHeightActually,
	maxWidthActually,
	defaultPaddingHorizontal,
	defineHeight40px,
	defineHeight20px,
	defineHeight100px,
	defineHeight160px
} from '../../utils/sizes';
import { Logo, Intro1, Intro2, Intro3 } from '../../utils/images';
import { FontSize } from '../../utils/fontSize';
import { UIColor, systemColor } from '../../utils/colors';
import styles from './styles';

function Start(props: any) {
	return (
		<View style={{  width: maxWidthActually }} >
			<VStack>
				<Image source={props.Intro}
					style={{
						width: maxWidthActually,
						resizeMode: 'contain',
						maxHeight: maxHeightActually * .2
					}}
				/>
				<Center>
				<Text style={{
					fontSize: FontSize.h6,
					color: systemColor(UIColor.black3),
					textAlign: 'center',
					marginTop: defineHeight20px * maxHeightActually *0.5,
					maxWidth: maxWidthActually * 0.9
				}}>{props.Desc}</Text>
				</Center>
			</VStack>
		</View>
	);
}

const WelcomeScene = ({navigation}) => {
	const [bannerActive, SetBannerActive] = React.useState(0);
	const onChange = (nativeEvent: any) => {
		if (nativeEvent) {
			const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
			if (slide != bannerActive) {
				SetBannerActive(slide);
			}
		}
	}
	return (
		<View style={{flex: 1}} >
			<Center>
				<VStack>
					<Center
						height={defineHeight160px * maxHeightActually}
					>
						<Image source={Logo}
							style={{
								width: maxWidthActually * .5,
								resizeMode: 'contain',

							}}
						/>
					</Center>
					<ScrollView
						onScroll={({ nativeEvent }) => onChange(nativeEvent)}
						showsHorizontalScrollIndicator={false}
						pagingEnabled
						horizontal
						style={{ maxHeight: maxHeightActually * 0.26 }}

					>
						<Start Intro={Intro1} Desc={"Theo dõi TKB, hoạt động hàng ngày của học sinh bao gồm điểm danh, xe buýt..."} />
						<Start Intro={Intro2} Desc={"Cập nhật kết quả học tập, tin tức liên quan đến học sinh và nhà trường một cách nhanh chóng."} />
						<Start Intro={Intro3} Desc={"Theo dõi suất ăn, đăng ký thực đơn hàng tháng cho học sinh"} />

					</ScrollView>
					<HStack
						space={2}
						justifyContent='center'
					>
						<Text style={bannerActive == 0 ? styles.dotActive : styles.dot}>
							●
						</Text>
						<Text style={bannerActive == 1 ? styles.dotActive : styles.dot}>
							●
						</Text>
						<Text style={bannerActive == 2 ? styles.dotActive : styles.dot}>
							●
						</Text>
					</HStack>
				</VStack>
			</Center>
			<Box
				paddingLeft={defaultPaddingHorizontal}
				paddingRight={defaultPaddingHorizontal}
			>
				<Text 
					style={{
						color: systemColor(UIColor.black),
						fontSize: FontSize.h2,
						fontWeight: '600',
						marginTop: defineHeight20px * maxHeightActually *0.5
					}}>
					XIN CHÀO!
				</Text>
				<Text 
					style={{
						color: systemColor(UIColor.black3),
						fontSize: FontSize.h6,
						fontWeight: '600',
						marginTop: defineHeight20px * maxHeightActually * 0.5
					}}>
					Xin chào quý phụ huynh và các bạn học sinh
				</Text>
				
				<VStack marginTop={5} space={4} justifyContent="space-between" >
					<Button 
						colorScheme='primary' 
						borderRadius={50} 
						onPress={()=>navigation.navigate("LoginScene")}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "600",
								color: systemColor(UIColor.white)
							}}
						>Đăng nhập</Text>
					</Button>
					<Button 
						colorScheme='primary' 
						variant='outline' 
						borderRadius={50}
						fontSize = {FontSize.h5}
						borderColor = {systemColor(UIColor.accent1)}
					>
						<Text
							style={{
								fontSize: FontSize.h4,
								fontWeight: "600",
								color: systemColor(UIColor.accent1)
							}}
						>Đăng ký</Text>
					</Button>
				</VStack>
				<Text
				style={{
					
					bottom: - maxHeightActually * 0.2,
					color: systemColor(UIColor.black5),
					fontSize: FontSize.h6,
					textAlign:'center',
					
				}}>
					Copyright @OnlineCRM
				</Text>
			</Box>
		</View >
	)
}

export default WelcomeScene