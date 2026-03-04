import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './navigation/AppNavigator';
import CustomSplash from './screens/SplashScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
          'MaterialCommunityIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A1929' }}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (showSplash) {
    return <CustomSplash onEnter={() => setShowSplash(false)} />;
  }

  return <AppNavigator />;
}