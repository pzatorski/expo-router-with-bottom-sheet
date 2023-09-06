import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const data = Array.from({ length: 50 }).map((_, index) => ({
  id: index,
  title: `Item ${index}`,
}));

export default function HomeScreen() {
  return (
    <BottomSheetScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Data:</Text>

      {data.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </BottomSheetScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
