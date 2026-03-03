// screens/AllFacultiesScreen.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faculties } from '../data/courses';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const AllFacultiesScreen = () => {
  const navigation = useNavigation();

  const renderFacultyCard = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.facultyCard, index % 2 === 0 ? styles.cardLeft : styles.cardRight]}
      onPress={() => navigation.navigate('Faculty', { faculty: item })}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.facultyImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.85)']}
        style={styles.cardOverlay}
      >
        <View style={styles.cardContent}>
          <View style={styles.courseBadge}>
            <Ionicons name="book-outline" size={12} color="#FFFFFF" />
            <Text style={styles.courseBadgeText}>5 programs</Text>
          </View>
          <Text style={styles.facultyName}>{item.name}</Text>
          <View style={styles.exploreIndicator}>
            <Text style={styles.exploreText}>Explore</Text>
            <Ionicons name="arrow-forward" size={16} color="#F97316" />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1929" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>All Faculties</Text>
          <Text style={styles.headerSubtitle}>{faculties.length} departments</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Stats Summary */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{faculties.length}</Text>
          <Text style={styles.statLabel}>Faculties</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>30+</Text>
          <Text style={styles.statLabel}>Programs</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>150+</Text>
          <Text style={styles.statLabel}>Countries</Text>
        </View>
      </View>

      {/* Faculty Grid */}
      <FlatList
        data={faculties}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        renderItem={renderFacultyCard}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A1929',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1E3A5F',
    backgroundColor: '#0A1929',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#132F4C',
    borderRadius: 20,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#132F4C',
    borderRadius: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#132F4C',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
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
  gridContainer: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  facultyCard: {
    flex: 1,
    height: 200,
    marginHorizontal: 4,
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#132F4C',
  },
  cardLeft: {
    marginRight: 4,
  },
  cardRight: {
    marginLeft: 4,
  },
  facultyImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  cardContent: {
    padding: 12,
  },
  courseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.9)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
    gap: 4,
  },
  courseBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  facultyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    lineHeight: 20,
  },
  exploreIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exploreText: {
    color: '#F97316',
    fontSize: 12,
    fontWeight: '500',
  },
  footer: {
    height: 20,
  },
});

export default AllFacultiesScreen;