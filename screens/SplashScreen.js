import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD = width - 48;

const SplashScreen = ({ onEnter }) => {
  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const btnFade   = useRef(new Animated.Value(0)).current;
  const btnSlide  = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim,  { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(btnFade,  { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(btnSlide, { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1929" />

      <View style={styles.glow1} />
      <View style={styles.glow2} />

      {/* Card */}
      <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

        {/* Logo */}
        <LinearGradient colors={['#1e40af','#3b82f6']} style={styles.logoCircle} start={{x:0,y:0}} end={{x:1,y:1}}>
          <View style={styles.logoInner}>
            <View style={styles.lVertical} />
            <View style={styles.lHorizontal} />
            <View style={styles.globe}>
              <View style={styles.globeLine1} />
              <View style={styles.globeLine2} />
            </View>
          </View>
        </LinearGradient>

        {/* Text */}
        <View style={styles.textBlock}>
          <Text style={styles.name}>LIMKOKWING</Text>
          <Text style={styles.uni}>UNIVERSITY</Text>
          <Text style={styles.tagline}>of Creative Technology</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Lesotho's leading university in creative technology, design and innovation — shaping the next generation of global graduates.
        </Text>
      </Animated.View>

      {/* Button */}
      <Animated.View style={{ opacity: btnFade, transform: [{ translateY: btnSlide }], marginTop: 8 }}>
        <TouchableOpacity activeOpacity={0.85} onPress={onEnter}>
          <LinearGradient
            colors={['#1e40af','#3b82f6']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Enter the App</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

      <Animated.Text style={[styles.footer, { opacity: btnFade }]}>
        Limkokwing Prospectus · Lesotho
      </Animated.Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1929',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  glow1: {
    position: 'absolute', width: 350, height: 350,
    borderRadius: 175, top: -120, left: -120,
    backgroundColor: 'rgba(30,64,175,0.18)',
  },
  glow2: {
    position: 'absolute', width: 250, height: 250,
    borderRadius: 125, bottom: -80, right: -80,
    backgroundColor: 'rgba(59,130,246,0.1)',
  },
  card: {
    width: CARD,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.25)',
    borderRadius: 28,
    padding: 32,
    alignItems: 'center',
    marginBottom: 28,
  },
  logoCircle: {
    width: 100, height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoInner: {
    width: 72, height: 72,
    backgroundColor: '#fff',
    borderRadius: 36,
    position: 'relative',
  },
  lVertical: {
    position: 'absolute',
    left: 16, top: 12,
    width: 12, height: 36,
    backgroundColor: '#1e40af',
    borderRadius: 2,
  },
  lHorizontal: {
    position: 'absolute',
    left: 16, bottom: 12,
    width: 32, height: 12,
    backgroundColor: '#1e40af',
    borderRadius: 2,
  },
  globe: {
    position: 'absolute',
    right: 8, top: 10,
    width: 22, height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#3b82f6',
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  globeLine1: {
    position: 'absolute',
    width: 22, height: 1.5,
    backgroundColor: 'rgba(30,64,175,0.5)',
  },
  globeLine2: {
    position: 'absolute',
    width: 1.5, height: 22,
    backgroundColor: 'rgba(30,64,175,0.5)',
  },
  textBlock: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    color: '#3b82f6',
    fontSize: 22, fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 4,
  },
  uni: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 11, fontWeight: '600',
    letterSpacing: 5,
    marginBottom: 2,
  },
  tagline: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 10, letterSpacing: 1.5,
  },
  divider: {
    width: '100%', height: 1,
    backgroundColor: 'rgba(59,130,246,0.2)',
    marginBottom: 16,
  },
  description: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13, textAlign: 'center',
    lineHeight: 20, letterSpacing: 0.3,
  },
  btn: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 16, paddingHorizontal: 40,
    borderRadius: 60,
    elevation: 10,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4, shadowRadius: 20,
  },
  btnText: {
    color: '#fff', fontSize: 15,
    fontWeight: '600', letterSpacing: 1,
    marginRight: 10,
  },
  footer: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 11, letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 16,
  },
});

export default SplashScreen;