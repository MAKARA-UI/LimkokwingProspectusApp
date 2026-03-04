import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    'MaterialCommunityIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    'AntDesign': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf'),
    'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A1929' }}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return <AppNavigator />;
}