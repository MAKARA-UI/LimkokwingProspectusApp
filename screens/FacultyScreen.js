import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CourseCard from '../components/CourseCard';

const FacultyScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { faculty } = route.params;

  const [courses, setCourses] = useState(faculty.courses);

  const handleRatingUpdate = (courseId, newRating) => {
    setCourses(prevCourses =>
      prevCourses.map(c =>
        c.id === courseId ? { ...c, rating: newRating } : c
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: faculty.image || 'https://oktamam.com/wp-content/uploads/2023/05/limkokwing-university-of-creative-technology-office.jpg.webp' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)']}
            style={styles.heroOverlay}
          >
            <Text style={styles.facultyTitle}>
              Faculty of {faculty.name.replace('Faculty of ', '')}
            </Text>
            <Text style={styles.facultySubtitle}>
              {faculty.name}
            </Text>
          </LinearGradient>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.introText}>
            Explore the dynamic world of {faculty.name.toLowerCase().includes('design') ? 'creative design' : 
              faculty.name.toLowerCase().includes('communication') ? 'media, journalism, and broadcasting' : 
              faculty.name.toLowerCase().includes('information') ? 'technology, innovation, and digital transformation' :
              'innovation and future careers'}.
          </Text>
          <Text style={styles.introSubText}>
            {faculty.name.toLowerCase().includes('information') 
              ? 'Master the skills to develop cutting-edge software, multimedia applications, and IT solutions that drive the digital economy.'
              : 'Learn to create compelling content, solutions, and experiences across digital and traditional platforms.'}
          </Text>
        </View>

        {/* Courses Section */}
        <View style={styles.coursesHeader}>
          <Text style={styles.coursesTitle}>Courses ({courses.length})</Text>
        </View>

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onView={() => navigation.navigate('CourseDetail', { course })}
            onRatingUpdate={(newRating) => handleRatingUpdate(course.id, newRating)}
          />
        ))}
      </ScrollView>

      {/* Bottom Tab Bar - same as home */}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="school" size={28} color="#60a5fa" />
          <Text style={[styles.tabLabel, { color: '#60a5fa' }]}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Ionicons name="bulb-outline" size={28} color="#94a3b8" />
          <Text style={styles.tabLabel}>Career Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('About')}
        >
          <Ionicons name="information-circle-outline" size={28} color="#94a3b8" />
          <Text style={styles.tabLabel}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#020617' },
  container: { flex: 1, backgroundColor: '#020617' },

  heroContainer: { height: 220, position: 'relative' },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 20,
  },
  facultyTitle: { color: '#f97316', fontSize: 20, fontWeight: 'bold' },
  facultySubtitle: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginTop: 4 },

  descriptionContainer: { padding: 20 },
  introText: { color: '#e2e8f0', fontSize: 16, lineHeight: 24 },
  introSubText: { color: '#94a3b8', fontSize: 14, marginTop: 8 },

  coursesHeader: { paddingHorizontal: 20, marginBottom: 12 },
  coursesTitle: { color: '#e2e8f0', fontSize: 20, fontWeight: 'bold' },

  bottomTab: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingVertical: 10,
  },
  tabItem: { flex: 1, alignItems: 'center', padding: 8 },
  tabLabel: { color: '#94a3b8', fontSize: 12, marginTop: 4 },
});

export default FacultyScreen;
