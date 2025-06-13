import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function ChildDashboard() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu" size={28} color="#2c7873" />
        </TouchableOpacity>
        
        <Image 
          source={require('@/assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
          onError={(e) => console.log('Image loading error:', e.nativeEvent.error)}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>Assalamu Alaikum!</Text>
        <Text style={styles.subtitle}>Let's learn Islam today</Text>
        
        <View style={styles.quickLinks}>
          <Link href="/(child)/books" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Ionicons name="book" size={30} color="#2c7873" />
              <Text style={styles.quickLinkText}>Books</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/(child)/videos" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Ionicons name="play-circle" size={30} color="#2c7873" />
              <Text style={styles.quickLinkText}>Videos</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 3,
    marginTop:40
  },
  logo: {
    width: 120,
    height: 40,
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'ScheherazadeNew-Bold',
    color: '#2c7873',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'ScheherazadeNew-Regular',
    color: '#555',
    marginBottom: 30,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  quickLink: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    elevation: 2,
  },
  quickLinkText: {
    marginTop: 10,
    fontFamily: 'ScheherazadeNew-Regular',
    fontSize: 16,
    color: '#2c7873',
  },
});