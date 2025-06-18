import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '@/context/AuthContext';

export default function LoadingScreen() {
  const { userRole, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2c7873" />
      </View>
    );
  }

  if (!userRole) {
    return <Redirect href="/login" />;
  }

  return <Redirect href={`/${userRole}`} />;
}