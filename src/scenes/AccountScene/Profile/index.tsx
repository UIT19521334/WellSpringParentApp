import {  ImageBackground, Text } from 'react-native'
import React from 'react'
import { View, Button, HStack, Center } from 'native-base'
import { FontSize } from '../../../utils/fontSize'
import { systemColor, UIColor } from '../../../utils/colors'
import { Icon } from '../../../themes/Icons/IconCustom'
import { defaultPaddingHorizontal, headerAbsoluteHeight, maxWidthActually } from '../../../utils/sizes'

const Profile = () => {
  return (
	<View>
	  	<ImageBackground
				source={require('../../../assets/images/splash.jpg')}
				style={{
					width: maxWidthActually,
					height: headerAbsoluteHeight,
				}}
			>
				<Center
					paddingLeft={defaultPaddingHorizontal}
					paddingRight={defaultPaddingHorizontal}
					marginTop={headerAbsoluteHeight*0.2}
				>
						<Button
							backgroundColor={systemColor(UIColor.white)}
							borderRadius='full'
							height={headerAbsoluteHeight*0.7}
							width={headerAbsoluteHeight*0.7}

						>
							<Icon
								name='user'
								size={36}
								color={systemColor(UIColor.accent)}

							/>
						</Button>
				</Center>
			</ImageBackground>
	</View>
  )
}

export default Profile