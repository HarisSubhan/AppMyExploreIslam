import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function ChildDashboard() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu-outline" size={28} color="#2c7873" />
        </TouchableOpacity>
        
        <Image 
          source={require('@/assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>Assalamu Alaikum!</Text>
        <Text style={styles.subtitle}>What would you like to learn today?</Text>
        
        <View style={styles.quickLinks}>
          <Link href="/(child)/books" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Ionicons name="book-outline" size={32} color="#2c7873" />
              <Text style={styles.quickLinkText}>Books</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/(child)/Videos" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Ionicons name="play-circle-outline" size={32} color="#2c7873" />
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
    backgroundColor: '#f8f9fa' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  logo: {
    width: 120,
    height: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'ScheherazadeNew-Bold',
    color: '#2c7873',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'ScheherazadeNew-Regular',
    color: '#555',
    marginBottom: 30,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 15,
  },
  quickLink: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '45%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickLinkText: {
    marginTop: 10,
    fontFamily: 'ScheherazadeNew-Regular',
    fontSize: 16,
    color: '#2c7873',
  },
});