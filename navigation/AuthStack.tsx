import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/auth/login';
import RegisterScreen from '../components/auth/RegisterScreen';
import { AuthStackParamList } from '../types/navigation';
import AdminHome from '@/app/admin/AdminHome';
import ChildDashboard from '@/app/child/ChildDashboard';
import ParentHome from '@/app/parent/ParentHome';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="ChildDashboard" component={ChildDashboard} />
      <Stack.Screen name="ParentHome" component={ParentHome} />
    </Stack.Navigator>
  );
}
