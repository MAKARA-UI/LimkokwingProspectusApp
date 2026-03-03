// screens/CourseDetailScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import VideoPlayer from '../components/VideoPlayer';
import RatingButton from '../components/RatingButton';

const CourseDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { course } = route.params;
  const [rating, setRating] = useState(course.rating);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const courseHighlights = [
    { icon: 'time-outline', label: 'Duration', value: '3 Years' },
    { icon: 'school-outline', label: 'Level', value: 'Diploma/Degree' },
    { icon: 'people-outline', label: 'Intake', value: 'Feb, July, Sept' },
  ];

  // Format entry requirements based on faculty type
  const getEntryRequirements = () => {
    const courseName = course.name.toLowerCase();
    const facultyName = route.params?.facultyName || '';
    
    // Diploma in Creative Advertising / Graphic Design
    if (courseName.includes('creative advertising') || courseName.includes('graphic design')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes with at least a D in English and submission of a portfolio',
          '• A C grade in any of the following subjects is an added advantage: Art, Art and Design, Design and Technology, Home Economics and Needlework, Woodwork',
          '• Diploma in any relevant field OR TVET Certificate in any relevant field from a recognized institution by the Ministry of Education OR N4 in a relevant field'
        ]
      };
    }
    
    // Diploma in Fashion and Apparel Design
    if (courseName.includes('fashion')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes with at least a D in English and submission of a portfolio',
          '• A C grade in any of the following subjects is an added advantage: Art, Art and Design, Design and Technology, Home Economics and Needlework',
          '• Diploma in a relevant field OR N4 in a relevant field OR TVET Certificate in any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Degree in Professional Communication / Broadcasting & Journalism
    if (courseName.includes('communication') || (courseName.includes('broadcasting') && course.name.includes('Degree'))) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 4 C grades and 2 D passes including a C grade in English Language or English Literature',
          '• Diploma in Mass communication or any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Diploma in Television and Film / Broadcasting / Public Relations / Journalism
    if ((courseName.includes('television') || courseName.includes('film') || courseName.includes('broadcasting') || 
         courseName.includes('public relations') || courseName.includes('journalism')) && course.name.includes('Diploma')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes including a C grade in English Language/ Literature',
          '• Drama is an added advantage for Diploma in TV and Film Production',
          '• Diploma in any Relevant Field OR TVET Certificate in relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Diploma in Architectural Technology
    if (courseName.includes('architectural')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes with at least a D in Mathematics and English Language',
          '• C in any of the following subjects is an added advantage: Art, Wood work, Design and Technology, Technical Drawing',
          'OR',
          '• TVET Certificate in a relevant field',
          '• Certificate in Bricklaying',
          '• Certificate in Carpentry',
          '• N4 in relevant field'
        ]
      };
    }
    
    // Degree in International Business / Entrepreneurship / Human Resource Management
    if ((courseName.includes('international business') || courseName.includes('entrepreneurship') || 
         courseName.includes('human resource')) && course.name.includes('Degree')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 4 C grades with at least a C grade in Commercial subjects and 2 D passes in any other subjects inclusive of Mathematics',
          '• Diploma in any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Diploma in Business Management / Retail Management / Marketing
    if ((courseName.includes('business management') || courseName.includes('retail') || 
         courseName.includes('marketing')) && course.name.includes('Diploma')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades with at least a C grade in commercial subjects and 2 D passes in any other subjects inclusive of English Language and Mathematics',
          '• TVET Certificates in any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Degree in Tourism Management
    if (courseName.includes('tourism') && course.name.includes('Degree')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 4 C grades and 2 D passes or better including English Language/ Literature and Geography',
          '• Diploma in Tourism Management/ Business Management/ Cooperatives OR Diploma in Business Administration from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Diploma in Tourism / Hotel / Events Management
    if ((courseName.includes('tourism') || courseName.includes('hotel') || 
         courseName.includes('events')) && course.name.includes('Diploma')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes or better including a D in English Language/ Literature and Geography',
          '• TVET Certificate in any Relevant field',
          'OR Certificate in Catering/ Home Science/ Nutrition from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Degree in Software Engineering / Business Information Technology / Information Technology
    if ((courseName.includes('software') || courseName.includes('business information') || 
         courseName.includes('information technology')) && course.name.includes('Degree')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 4 C grades and 2 D passes',
          '• C grade or better in Mathematics',
          '• C grade or better in Commercial/Financial Subjects for Degree in Business Information Technology',
          '• Diploma in Information Technology or any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Diploma in Multimedia / Business Information Technology / Information Technology
    if ((courseName.includes('multimedia') || courseName.includes('business information') || 
         courseName.includes('information technology')) && course.name.includes('Diploma')) {
      return {
        title: 'Entry Requirements:',
        requirements: [
          '• A minimum of 3 C grades and 2 D passes',
          '• C grade or better in Mathematics',
          '• C grade or better in Commercial/Financial Subjects for Business Information Technology',
          '• Diploma in Information Technology',
          '• TVET Certificate in any relevant field from a recognized institution by the Ministry of Education'
        ]
      };
    }
    
    // Default requirements
    return {
      title: 'Entry Requirements:',
      requirements: [
        '• A minimum of 3 C grades and 2 D passes',
        '• English Language proficiency',
        '• Relevant portfolio for creative programs',
        '• Diploma or TVET Certificate in relevant field may be considered'
      ]
    };
  };

  const entryInfo = getEntryRequirements();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1929" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: course.image }}
            style={styles.courseImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(10, 25, 41, 0.95)']}
            style={styles.imageOverlay}
          >
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Course Header */}
        <View style={styles.headerContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.courseName}>{course.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#F97316" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
              <Text style={styles.ratingCount}>(120 reviews)</Text>
            </View>
          </View>
        </View>

        {/* Highlights */}
        <View style={styles.highlightsContainer}>
          {courseHighlights.map((item, index) => (
            <View key={index} style={styles.highlightItem}>
              <View style={styles.highlightIcon}>
                <Ionicons name={item.icon} size={20} color="#F97316" />
              </View>
              <Text style={styles.highlightLabel}>{item.label}</Text>
              <Text style={styles.highlightValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Program Overview</Text>
          <Text 
            style={styles.description}
            numberOfLines={isDescriptionExpanded ? undefined : 4}
          >
            {course.description}
          </Text>
          <TouchableOpacity 
            onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            style={styles.readMoreButton}
          >
            <Text style={styles.readMoreText}>
              {isDescriptionExpanded ? 'Read Less' : 'Read More'}
            </Text>
            <Ionicons 
              name={isDescriptionExpanded ? 'chevron-up' : 'chevron-down'} 
              size={16} 
              color="#F97316" 
            />
          </TouchableOpacity>
        </View>

        {/* Entry Requirements - Prospectus Style */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{entryInfo.title}</Text>
          <View style={styles.requirementsCard}>
            {entryInfo.requirements.map((req, index) => (
              <Text key={index} style={styles.requirementText}>
                {req}
              </Text>
            ))}
          </View>
        </View>

        {/* Course Video */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Preview</Text>
          <View style={styles.videoContainer}>
            <VideoPlayer 
              videoUri={course.video} 
              style={styles.video}
            />
          </View>
        </View>

        {/* Career Opportunities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Opportunities</Text>
          <View style={styles.careerTags}>
            <View style={styles.careerTag}>
              <Text style={styles.careerTagText}>Design Director</Text>
            </View>
            <View style={styles.careerTag}>
              <Text style={styles.careerTagText}>Creative Lead</Text>
            </View>
            <View style={styles.careerTag}>
              <Text style={styles.careerTagText}>Art Director</Text>
            </View>
            <View style={styles.careerTag}>
              <Text style={styles.careerTagText}>Production Manager</Text>
            </View>
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.ratingSection}>
          <View style={styles.ratingHeader}>
            <View>
              <Text style={styles.ratingSectionTitle}>Rate this Course</Text>
              <Text style={styles.ratingSubtitle}>Share your feedback</Text>
            </View>
            <View style={styles.currentRating}>
              <Ionicons name="star" size={24} color="#F97316" />
              <Text style={styles.currentRatingText}>{rating}</Text>
            </View>
          </View>
          
          <RatingButton 
            courseId={course.id} 
            initialRating={rating} 
            onRate={setRating} 
          />
        </View>

        {/* Save Button */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.saveButton}>
            <Ionicons name="bookmark-outline" size={24} color="#F97316" />
            <Text style={styles.saveButtonText}>Save for Later</Text>
          </TouchableOpacity>
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
  imageContainer: {
    height: 280,
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    marginTop: 8,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#0A1929',
  },
  titleSection: {
    marginBottom: 8,
  },
  courseName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingCount: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  highlightsContainer: {
    flexDirection: 'row',
    backgroundColor: '#132F4C',
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-around',
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  highlightLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    marginBottom: 4,
  },
  highlightValue: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 8,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readMoreText: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: '500',
  },
  requirementsCard: {
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  requirementText: {
    color: '#E2E8F0',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
  videoContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#132F4C',
  },
  video: {
    width: '100%',
    height: 200,
  },
  careerTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  careerTag: {
    backgroundColor: '#1E3A5F',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#2D4A6E',
  },
  careerTagText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  ratingSection: {
    backgroundColor: '#132F4C',
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingSectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingSubtitle: {
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 2,
  },
  currentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  currentRatingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#132F4C',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F97316',
    gap: 8,
  },
  saveButtonText: {
    color: '#F97316',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CourseDetailScreen;