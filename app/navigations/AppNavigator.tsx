import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import { BottomTabNavigator } from './BottomTabNavigator';
import { useAppSelector } from '@/store/store';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isLoggedIn ? "BottomTab" : "Login"}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}