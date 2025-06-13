import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuizPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Page</Text>
      {/* Admin specific content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' }
});