import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/CustomDrawer';

export default function Layout() {
  return (
    <Drawer drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Dashboard',
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="books"
        options={{
          title: 'Books',
          drawerLabel: 'Books',
        }}
      />
      <Drawer.Screen
        name="videos"
        options={{
          title: 'Videos',
          drawerLabel: 'Videos',
        }}
      />
    </Drawer>
  );
}