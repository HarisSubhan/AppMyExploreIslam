import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Assalamu Alaikum</Text>
        <Text style={styles.email}>Student</Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => console.log('Logout pressed')}
      >
        <Ionicons name="log-out" size={20} color="#fff" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#2c7873',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontFamily: 'ScheherazadeNew-Bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    fontFamily: 'ScheherazadeNew-Regular',
    color: '#ecf0f1',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    margin: 20,
    padding: 15,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    justifyContent: 'center',
    gap: 10,
  },
  logoutText: {
    color: 'white',
    fontFamily: 'ScheherazadeNew-Regular',
    fontSize: 16,
  },
});