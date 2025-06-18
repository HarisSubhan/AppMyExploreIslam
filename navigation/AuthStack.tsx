import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/app/auth/login';
import RegisterScreen from '@/app/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen 
        name="login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="register" 
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}