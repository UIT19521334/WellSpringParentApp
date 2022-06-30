import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button, Text } from 'native-base';
import React from 'react';
import { Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Global from '../../Global';
import I18n from '../../i18n';
import { getLabel } from '../../utils/commons';
import { AuthContext } from '../../utils/contexts';
import { AuthenticationManagerProps, UserLogin } from '../../utils/models';
const AuthenticationManager = ({ children }: AuthenticationManagerProps) => {
	const modalRef = React.useRef<Modalize>(null);
	const areaInsets = useSafeAreaInsets();

	const [state, dispatch] = React.useReducer(
		(prevState: any, action: any) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignOut: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignOut: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignOut: false,
			userToken: null,
		}
	);

	const authContext = React.useMemo(
		() => ({
			signIn: async (data: UserLogin) => {
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token
				Global.userLogin = JSON.stringify(data);

				setTimeout(() => {
					modalRef.current?.open();
				}, 1000);

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
			signOut: () => {

				AsyncStorage.removeItem('token')
					.catch((err) => {
						console.log('Saved token login');
					});
                    
				dispatch({ type: 'SIGN_OUT' })
			},
			signUp: async (data: any) => {

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
				
			},
			restoreToken: async (userToken: string) => {

				dispatch({ type: 'RESTORE_TOKEN', token: userToken });
			}
		}),
		[]
	);

	return (
		<AuthContext.Provider value={{ authState: state, ...authContext }}>
			{children}

			<Modalize
				ref={modalRef}
				adjustToContentHeight
				modalStyle={{
					backgroundColor: 'transparent',
					paddingHorizontal: 12
				}}
			>
				<Box
					p={5}
					backgroundColor='white.light'
					borderRadius={12}
				>

					<Box
						paddingY={4}
					>
						<Text
							textAlign='center'
							color='black3.light'
							fontWeight='bold'
						>
							Bạn có muốn lưu mật khẩu để sử dụng cho những phiên đăng nhập sau trên ứng dụng này không?
						</Text>
					</Box>

					<Box
						paddingBottom={10}
					>
						<Text
							textAlign='center'
							color='black5.light'
							fontWeight='normal'

						>
							Bạn có thể xem và xóa mật khẩu đã lưu trong màn hình "Tài khoản" ➝ "Quản lý mật khẩu".
						</Text>
					</Box>

					<Button
						variant='ghost'
						style={{
							borderRadius: 50
						}}
						_pressed={{
							backgroundColor: 'accent1.light'
						}}
						onPress={() => {
							
							AsyncStorage.setItem('store-user', Global.userLogin, (err) => {
								if (!err) {
									console.log('Saved information user');
								}
							});

							modalRef.current?.close();
						}}

					>
						Lưu mật khẩu
					</Button>
				</Box>

				<Box
					paddingTop={4}
					style={{
						paddingBottom: areaInsets.bottom + 12
					}}
				>
					<Button
						style={{
							borderRadius: 50
						}}
						_light={{
							backgroundColor: 'useful2.light'
						}}
						_pressed={{
							backgroundColor: 'useful.light'
						}}
						onPress={() => modalRef.current?.close?.()}
					>
						Để sau
					</Button>
				</Box>
			</Modalize>
		</AuthContext.Provider>
	)
}

export default AuthenticationManager;
