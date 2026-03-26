import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ACHIEVEMENTS = [
  {
    id: '1',
    number: '150+',
    label: 'Countries',
    icon: 'globe-outline',
    color: '#3B82F6',
  },
  {
    id: '2',
    number: '30K+',
    label: 'Students',
    icon: 'people-outline',
    color: '#10B981',
  },
  {
    id: '3',
    number: '12+',
    label: 'Campuses',
    icon: 'business-outline',
    color: '#F59E0B',
  },
  {
    id: '4',
    number: '30+',
    label: 'Years',
    icon: 'calendar-outline',
    color: '#EF4444',
  },
];

const FACTS = [
  {
    title: 'Global Community',
    description: 'A vibrant melting pot of cultures from over 150 countries across 3 continents.',
    icon: 'earth',
  },
  {
    title: 'Industry Ready',
    description: 'Programs designed in collaboration with industry leaders to ensure career success.',
    icon: 'rocket',
  },
  {
    title: 'Creative Excellence',
    description: 'State-of-the-art facilities including AR labs, 3D printers, and creative studios.',
    icon: 'color-palette',
  },
  {
    title: 'Award Winning',
    description: 'Recognized as Lesotho\'s most award-winning university for academic excellence.',
    icon: 'trophy',
  },
];

const AboutScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.universityName}>Limkokwing</Text>
            <Text style={styles.universitySubtitle}>University of Creative Technology</Text>
          </View>
        </View>
      <View style={styles.content}>

        <View style={styles.missionCard}>
          <Text style={styles.missionText}>
            Where creativity meets innovation. We nurture the next generation of creative leaders, 
            equipping them with the skills, knowledge, and global perspective to thrive in a 
            rapidly evolving world.
          </Text>
        </View>

          <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>By The Numbers</Text>
          <View style={styles.statsGrid}>
            {ACHIEVEMENTS.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: `${stat.color}20` }]}>
                  <Ionicons name={stat.icon} size={24} color={stat.color} />
                </View>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.factsSection}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          {FACTS.map((fact, index) => (
            <View key={index} style={styles.factCard}>
              <View style={styles.factIconContainer}>
                <Ionicons name={fact.icon} size={28} color="#F97316" />
              </View>
              <View style={styles.factContent}>
                <Text style={styles.factTitle}>{fact.title}</Text>
                <Text style={styles.factDescription}>{fact.description}</Text>
              </View>
            </View>
          ))}
        </View>

           <View style={styles.bestSection}>
          <Text style={styles.bestTitle}>BE THE BEST</Text>
          <Text style={styles.bestSubtitle}>BE A LIMKOKWING GRADUATE</Text>
          
          <View style={styles.bestPoints}>
            <View style={styles.bestPoint}>
              <Ionicons name="checkmark-circle" size={20} color="#F97316" />
              <Text style={styles.bestPointText}>Best in your sphere of studies</Text>
            </View>
            <View style={styles.bestPoint}>
              <Ionicons name="checkmark-circle" size={20} color="#F97316" />
              <Text style={styles.bestPointText}>Best trained to succeed</Text>
            </View>
            <View style={styles.bestPoint}>
              <Ionicons name="checkmark-circle" size={20} color="#F97316" />
              <Text style={styles.bestPointText}>Best in digital & creative skills</Text>
            </View>
            <View style={styles.bestPoint}>
              <Ionicons name="checkmark-circle" size={20} color="#F97316" />
              <Text style={styles.bestPointText}>Best in making global connections</Text>
            </View>
            <View style={styles.bestPoint}>
              <Ionicons name="checkmark-circle" size={20} color="#F97316" />
              <Text style={styles.bestPointText}>Best among the best</Text>
            </View>
          </View>
        </View>

        <View style={styles.programsPreview}>
          <Text style={styles.programsTitle}>Our Faculties</Text>
          <View style={styles.programTags}>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Design Innovation</Text>
            </View>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Communication & Media</Text>
            </View>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Architecture</Text>
            </View>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Business</Text>
            </View>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Tourism & Hospitality</Text>
            </View>
            <View style={styles.programTag}>
              <Text style={styles.programTagText}>Information Technology</Text>
            </View>
          </View>
        </View>

         <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Get In Touch</Text>
          <View style={styles.contactCard}>
            <View style={styles.contactRow}>
              <Ionicons name="call-outline" size={18} color="#9CA3AF" />
              <Text style={styles.contactText}>+266 2231 5767</Text>
            </View>
            <View style={styles.contactDivider} />
            <View style={styles.contactRow}>
              <Ionicons name="mail-outline" size={18} color="#9CA3AF" />
              <Text style={styles.contactText}>enrolment@limkokwing.ac.ls</Text>
            </View>
            <View style={styles.contactDivider} />
            <View style={styles.contactRow}>
              <Ionicons name="location-outline" size={18} color="#9CA3AF" />
              <Text style={styles.contactText}>Maseru, Lesotho</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Shaping creative leaders for a global future
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1929',
  },
  headerContainer: {
    height: 240,
    position: 'relative',
  },
   headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 41, 0.85)',
  },
  headerContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
  },
  universityName: {
    color: '#F97316',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  universitySubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  missionCard: {
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  missionText: {
    color: '#E2E8F0',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  statsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  factsSection: {
    marginBottom: 24,
  },
  factCard: {
    flexDirection: 'row',
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  factIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  factContent: {
    flex: 1,
  },
  factTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  factDescription: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
  },
  bestSection: {
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  bestTitle: {
    color: '#F97316',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bestSubtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  bestPoints: {
    gap: 12,
  },
  bestPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bestPointText: {
    color: '#E2E8F0',
    fontSize: 15,
    flex: 1,
  },
  programsPreview: {
    marginBottom: 24,
  },
  programsTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  programTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  programTag: {
    backgroundColor: '#1E3A5F',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#2D4A6E',
  },
  programTagText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  contactSection: {
    marginBottom: 24,
  },
  contactTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#132F4C',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  contactDivider: {
    height: 1,
    backgroundColor: '#1E3A5F',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 15,
    flex: 1,
  },
  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 20,
    fontStyle: 'italic',
  },
});

export default AboutScreen;