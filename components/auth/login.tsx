import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [role, setRole] = useState('');  
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!role) {
      Alert.alert('Error', 'Please enter your role.');
      return;
    }

    Alert.alert('Login Success', `Role: ${role}`);

    if (role.toLowerCase() === 'admin') {
      navigation.navigate('AdminHome');
    } else if (role.toLowerCase() === 'child') {
      navigation.navigate('child');
    } else if (role.toLowerCase()==='parent'){
      navigation.navigate('ParentHome');
    }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Role (admin, user, guest)"
        style={styles.input}
        value={role}
        onChangeText={setRole}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { marginTop: 15, textAlign: 'center', color: '#007AFF' },
});
