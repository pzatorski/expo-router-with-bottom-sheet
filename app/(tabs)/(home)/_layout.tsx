import { FontAwesome } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Link, Stack } from 'expo-router';
import { useEffect, useMemo, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function HomeLayout() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
      >
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Main Screen',

              headerRight: () => (
                <Link href="/another" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="address-book"
                        size={22}
                        style={{
                          marginRight: 10,
                          opacity: pressed ? 0.5 : 1,
                        }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Stack.Screen
            name="another"
            options={{ title: 'Another' }}
          />
        </Stack>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
