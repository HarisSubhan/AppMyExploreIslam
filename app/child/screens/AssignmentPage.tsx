import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssignmentPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignment Page</Text>
      {/* Admin specific content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' }
});