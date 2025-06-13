import 'react-native-gesture-handler'; // Must be at the top
import { NavigationContainer } from '@react-navigation/native';
import { View, Image } from 'react-native';
import Navigation from '@/navigation';
import { useState } from 'react';

export default function Index() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image source={require('../assets/images/logo.png')} style={{ width: 200, height: 200 }} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigation userRole="child" />
    </NavigationContainer>
  );
}