import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/context/AuthContext';

export default function CustomDrawer(props: any) {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.name}>Assalamu Alaikum</Text>
        <Text style={styles.email}>Student Account</Text>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
  <Ionicons name="log-out-outline" size={22} color="#fff" />
  <Text style={styles.logoutText}>Sign Out</Text>
</TouchableOpacity>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    padding: 20,
    backgroundColor: '#2c7873',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)'
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontFamily: 'ScheherazadeNew-Bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    fontFamily: 'ScheherazadeNew-Regular',
    color: 'rgba(255,255,255,0.8)',
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: {
    color: 'white',
    fontFamily: 'ScheherazadeNew-Regular',
    fontSize: 16,
  },
});
