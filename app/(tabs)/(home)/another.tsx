import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AnotherScreen() {
  return (
    <View style={styles.container}>
      <Text>AnotherScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
