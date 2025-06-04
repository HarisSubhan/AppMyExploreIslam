
import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import AppNavigator from '@/navigation';

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>
    );
  }

  return <AppNavigator />;
}
