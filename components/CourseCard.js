import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RatingButton from './RatingButton';

const CourseCard = ({ course, onView, onRatingUpdate }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseDesc} numberOfLines={2}>
          {course.description}
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>★ {course.rating}/5</Text>
          <RatingButton
            courseId={course.id}
            initialRating={course.rating}
            onRate={onRatingUpdate} // Updates both local state and AsyncStorage
          />
        </View>
      </View>

      <TouchableOpacity style={styles.viewButton} onPress={onView}>
        <Text style={styles.viewText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  content: { flex: 1 },
  courseName: { color: '#e2e8f0', fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  courseDesc: { color: '#cbd5e1', fontSize: 14, lineHeight: 20, marginBottom: 10 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  ratingText: { color: '#fbbf24', fontSize: 16, fontWeight: 'bold' },
  viewButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  viewText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
});

export default CourseCard;