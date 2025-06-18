import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/CustomDrawer';
import { useAuth } from '@/context/AuthContext';
import { Redirect } from 'expo-router';

export default function ChildStack() {
  const { userRole } = useAuth();

  if (userRole !== 'child') {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#2c7873',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontFamily: 'ScheherazadeNew-Regular',
          fontSize: 16,
          marginLeft: -15,
        },
      }}
    >
      <Drawer.Screen 
        name="index"
        options={{
          title: 'Dashboard',
          drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="books"
        options={{
          title: 'Books',
          drawerIcon: ({ color }) => <Ionicons name="book-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="videos"
        options={{
          title: 'Videos',
          drawerIcon: ({ color }) => <Ionicons name="play-circle-outline" size={22} color={color} />,
        }}
      />
    </Drawer>
  );
}