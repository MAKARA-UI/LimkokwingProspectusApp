import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

const VideoPlayer = ({ videoUri, style }) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = async () => {
    if (!videoUri) return;
    setOpening(true);
    try {
      await WebBrowser.openBrowserAsync(videoUri, {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
        toolbarColor: '#000000',
        controlsColor: '#f97316',
        showTitle: false,
      });
    } catch (err) {
      console.error('WebBrowser error:', err);
    } finally {
      setOpening(false);
    }
  };

  const isDailymotion =
    videoUri?.includes('dai.ly') || videoUri?.includes('dailymotion');

  if (!videoUri) {
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.errorText}>No video available</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={handleOpen}
      disabled={opening}
    >
      <View style={styles.playCircle}>
        <Ionicons
          name={opening ? 'hourglass-outline' : 'play'}
          size={34}
          color="#fff"
          style={opening ? {} : { marginLeft: 4 }}
        />
      </View>

      <Text style={styles.label}>
        {opening ? 'Opening...' : 'Tap to watch video'}
      </Text>

      <View style={styles.badge}>
        <Ionicons
          name={isDailymotion ? 'play-circle-outline' : 'logo-youtube'}
          size={14}
          color={isDailymotion ? '#0066dc' : '#ff0000'}
        />
        <Text style={styles.badgeText}>
          {isDailymotion ? 'Dailymotion' : 'YouTube'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    backgroundColor: '#0f0f0f',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
  },
  playCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f97316',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 8,
  },
  label: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  badge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { color: 'rgba(255,255,255,0.5)', fontSize: 11 },
  errorText: { color: '#ef4444', fontSize: 14, textAlign: 'center', padding: 12 },
});

export default VideoPlayer;