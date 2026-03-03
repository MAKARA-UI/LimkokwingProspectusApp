import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { faculties } from '../data/courses';

const HomeScreen = () => {
  const navigation = useNavigation();

  const featuredFaculties = faculties.slice(0, 3);

  const renderFacultyCard = ({ item }) => (
    <TouchableOpacity
      style={styles.facultyCard}
      onPress={() => navigation.navigate('Faculty', { faculty: item })}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.image }} style={styles.facultyCardImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.facultyCardOverlay}
      >
        <Text style={styles.facultyCardName}>{item.name}</Text>
        <View style={styles.facultyCardBadge}>
          <Text style={styles.facultyCardBadgeText}>5 courses</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1929" />
      
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Future Graduate</Text>
            <Text style={styles.title}>Find Your Perfect Program</Text>
          </View>
        </View>

        {/* Hero Banner */}
        <LinearGradient
          colors={['#1E3A5F', '#0F2A40']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroBanner}
        >
          <Text style={styles.heroTitle}>BE THE BEST</Text>
          <Text style={styles.heroSubtitle}>BE A LIMKOKWING GRADUATE</Text>
          <Text style={styles.heroDescription}>
            Join Lesotho's most award-winning university and shape your future with innovative programs.
          </Text>
          <TouchableOpacity 
            style={styles.heroButton}
            onPress={() => navigation.navigate('AllFaculties')}
          >
            <Text style={styles.heroButtonText}>Explore Programs</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </LinearGradient>

        {/* Quick Stats - Display Only */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>30K+</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Faculties</Text>
          </View>
        </View>

        {/* Featured Faculties */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Faculties</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllFaculties')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={featuredFaculties}
            renderItem={renderFacultyCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>

        {/* Why Choose Us - Display Only */}
        <View style={styles.whyChooseSection}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitCard}>
              <View style={styles.benefitIconContainer}>
                <MaterialCommunityIcons name="lightbulb-on" size={28} color="#F97316" />
              </View>
              <Text style={styles.benefitTitle}>Innovation</Text>
              <Text style={styles.benefitDescription}>Latest technology and creative thinking</Text>
            </View>

            <View style={styles.benefitCard}>
              <View style={styles.benefitIconContainer}>
                <Ionicons name="globe-outline" size={28} color="#F97316" />
              </View>
              <Text style={styles.benefitTitle}>Global Network</Text>
              <Text style={styles.benefitDescription}>Connect with 150+ countries</Text>
            </View>

            <View style={styles.benefitCard}>
              <View style={styles.benefitIconContainer}>
                <MaterialCommunityIcons name="trophy" size={28} color="#F97316" />
              </View>
              <Text style={styles.benefitTitle}>Excellence</Text>
              <Text style={styles.benefitDescription}>Award-winning education</Text>
            </View>

            <View style={styles.benefitCard}>
              <View style={styles.benefitIconContainer}>
                <Ionicons name="rocket-outline" size={28} color="#F97316" />
              </View>
              <Text style={styles.benefitTitle}>Career Ready</Text>
              <Text style={styles.benefitDescription}>Practical skills for success</Text>
            </View>
          </View>
        </View>

        {/* Career Quiz CTA */}
        <LinearGradient
          colors={['#F97316', '#FB923C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.quizCTA}
        >
          <View style={styles.quizCTAContent}>
            <View>
              <Text style={styles.quizCTATitle}>Not sure what to study?</Text>
              <Text style={styles.quizCTADescription}>
                Take our career guide quiz to find the perfect program for you
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.quizCTAButton}
              onPress={() => navigation.navigate('Quiz')}
            >
              <Text style={styles.quizCTAButtonText}>Start Quiz</Text>
              <Ionicons name="arrow-forward" size={20} color="#F97316" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Contact Information - Static */}
        <View style={styles.contactContainer}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Ionicons name="call-outline" size={20} color="#F97316" />
              <Text style={styles.contactText}>+266 2231 5767</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="globe-outline" size={20} color="#F97316" />
              <Text style={styles.contactText}>www.limkokwing.ac.ls</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="mail-outline" size={20} color="#F97316" />
              <Text style={styles.contactText}>info@limkokwing.ac.ls</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A1929',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  
  // Header Styles
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  greeting: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Hero Banner Styles
  heroBanner: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
  },
  heroTitle: {
    color: '#F97316',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  heroDescription: {
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'flex-start',
    gap: 8,
  },
  heroButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // Stats Styles
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#132F4C',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    marginBottom: 24,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#F97316',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#2D4A6E',
  },

  // Section Styles
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: '500',
  },

  // Faculty Card Styles
  featuredList: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  facultyCard: {
    width: 280,
    height: 160,
    marginRight: 12,
    borderRadius: 15,
    overflow: 'hidden',
  },
  facultyCardImage: {
    width: '100%',
    height: '100%',
  },
  facultyCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  facultyCardName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  facultyCardBadge: {
    backgroundColor: '#F97316',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  facultyCardBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  // Why Choose Us Styles
  whyChooseSection: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  benefitCard: {
    width: '48%',
    backgroundColor: '#132F4C',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
  },
  benefitIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1E3A5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  benefitDescription: {
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 16,
  },

  // Quiz CTA Styles
  quizCTA: {
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 24,
    overflow: 'hidden',
  },
  quizCTAContent: {
    padding: 20,
  },
  quizCTATitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quizCTADescription: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 16,
    lineHeight: 20,
  },
  quizCTAButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    gap: 8,
    alignSelf: 'flex-start',
  },
  quizCTAButtonText: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Contact Information Styles
  contactContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contactInfo: {
    backgroundColor: '#132F4C',
    borderRadius: 15,
    padding: 20,
    marginTop: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default HomeScreen;