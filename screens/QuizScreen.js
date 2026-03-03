import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Vibration,
  Platform,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { faculties } from "../data/courses";

const quizQuestions = [
  {
    question: "What type of creative work excites you the most?",
    options: [
      { text: "Graphic design, fashion, advertising", faculty: "Design Innovation" },
      { text: "Journalism, film, broadcasting, media", faculty: "Communication, Media and Broadcasting" },
      { text: "Buildings, interiors, architecture", faculty: "Architecture and the Built Environment" },
      { text: "Business, entrepreneurship, marketing", faculty: "Business and Globalization" },
      { text: "Travel, hotels, events, tourism", faculty: "Creativity in Tourism and Hospitality" },
      { text: "Software, apps, multimedia, IT", faculty: "Information and Communication Technology" },
    ],
  },
  {
    question: "Which skill would you most like to develop?",
    options: [
      { text: "Visual storytelling & creativity", faculty: "Design Innovation" },
      { text: "Communication & content creation", faculty: "Communication, Media and Broadcasting" },
      { text: "Technical drawing & spatial design", faculty: "Architecture and the Built Environment" },
      { text: "Leadership & business strategy", faculty: "Business and Globalization" },
      { text: "Hospitality & event planning", faculty: "Creativity in Tourism and Hospitality" },
      { text: "Coding & digital technology", faculty: "Information and Communication Technology" },
    ],
  },
  {
    question: "What kind of career environment appeals to you?",
    options: [
      { text: "Creative studio or agency", faculty: "Design Innovation" },
      { text: "TV/radio studio or newsroom", faculty: "Communication, Media and Broadcasting" },
      { text: "Construction or design firm", faculty: "Architecture and the Built Environment" },
      { text: "Corporate office or startup", faculty: "Business and Globalization" },
      { text: "Hotels, tourism agencies, events", faculty: "Creativity in Tourism and Hospitality" },
      { text: "Tech company or software house", faculty: "Information and Communication Technology" },
    ],
  },
  {
    question: "Which tool or technology interests you most?",
    options: [
      { text: "Adobe Creative Suite, sewing machines", faculty: "Design Innovation" },
      { text: "Cameras, editing software, microphones", faculty: "Communication, Media and Broadcasting" },
      { text: "CAD software, building models", faculty: "Architecture and the Built Environment" },
      { text: "Business plans, spreadsheets", faculty: "Business and Globalization" },
      { text: "Event platforms, booking systems", faculty: "Creativity in Tourism and Hospitality" },
      { text: "Programming languages, multimedia tools", faculty: "Information and Communication Technology" },
    ],
  },
];

const QuizScreen = () => {
  const navigation = useNavigation();
  const [quizState, setQuizState] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStartQuiz = () => {
    setQuizState("active");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleSelectOption = (facultyName) => {
    if (Platform.OS !== "web") {
      Vibration.vibrate(50);
    }

    const newAnswers = [...answers, facultyName];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState("result");
    }
  };

  const handleRestart = () => {
    setQuizState("intro");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const getRecommendedFaculty = () => {
    if (answers.length === 0) return null;

    const count = {};
    answers.forEach((faculty) => {
      count[faculty] = (count[faculty] || 0) + 1;
    });

    let maxCount = 0;
    let recommended = null;

    Object.keys(count).forEach((key) => {
      if (count[key] > maxCount) {
        maxCount = count[key];
        recommended = key;
      }
    });

    return faculties.find((f) => f.name.includes(recommended)) || faculties[0];
  };

  const recommendedFaculty = quizState === "result" ? getRecommendedFaculty() : null;

  const renderIntro = () => (
    <View style={styles.introContainer}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name="compass-outline" size={50} color="#F97316" />
      </View>
      <Text style={styles.introTitle}>Find Your Path</Text>
      <Text style={styles.introDescription}>
        Discover which faculty matches your interests and talents with our quick career guidance quiz.
      </Text>
      
      <View style={styles.featureList}>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          <Text style={styles.featureText}>4 quick questions</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          <Text style={styles.featureText}>Personalized recommendation</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          <Text style={styles.featureText}>Explore matching programs</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
        <Text style={styles.startButtonText}>Begin Assessment</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  const renderQuestion = () => {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <View style={styles.questionContainer}>
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.questionCount}>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </Text>
            <Text style={styles.progressPercentage}>{Math.round(progress)}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <Text style={styles.questionText}>{question.question}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionCard}
              onPress={() => handleSelectOption(option.faculty)}
              activeOpacity={0.7}
            >
              <View style={styles.optionIcon}>
                <Text style={styles.optionLetter}>{String.fromCharCode(65 + index)}</Text>
              </View>
              <Text style={styles.optionText}>{option.text}</Text>
              <Ionicons name="chevron-forward" size={20} color="#4B5563" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderResult = () => (
    <View style={styles.resultContainer}>
      <View style={styles.resultCard}>
        <View style={styles.resultIconContainer}>
          <Ionicons name="trophy" size={50} color="#F97316" />
        </View>
        
        <Text style={styles.resultSubtitle}>Your recommended faculty</Text>
        
        {recommendedFaculty && (
          <>
            <Text style={styles.resultFacultyName}>{recommendedFaculty.name}</Text>
            
            <View style={styles.resultStats}>
              <View style={styles.resultStat}>
                <Text style={styles.resultStatNumber}>{answers.length}</Text>
                <Text style={styles.resultStatLabel}>Questions answered</Text>
              </View>
              <View style={styles.resultStatDivider} />
              <View style={styles.resultStat}>
                <Text style={styles.resultStatNumber}>
                  {Math.round((answers.filter(a => a.includes(recommendedFaculty.name)).length / answers.length) * 100)}%
                </Text>
                <Text style={styles.resultStatLabel}>Match rate</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate("Faculty", { faculty: recommendedFaculty })}
            >
              <Text style={styles.exploreButtonText}>Explore Faculty</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </>
        )}

        <Text style={styles.resultNote}>
          This is a starting point! Limkokwing offers many exciting programs across all faculties.
        </Text>

        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Ionicons name="refresh" size={20} color="#9CA3AF" />
          <Text style={styles.restartButtonText}>Take Quiz Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Career Quiz</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Content */}
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {quizState === "intro" && renderIntro()}
          {quizState === "active" && renderQuestion()}
          {quizState === "result" && renderResult()}
        </ScrollView>
      </View>
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
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },

  // Intro Styles
  introContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  introTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  introDescription: {
    color: '#9CA3AF',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  featureList: {
    width: '100%',
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  featureText: {
    color: '#E2E8F0',
    fontSize: 16,
  },
  startButton: {
    backgroundColor: '#F97316',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    gap: 8,
    width: '100%',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  // Question Styles
  questionContainer: {
    padding: 20,
  },
  progressSection: {
    marginBottom: 30,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionCount: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  progressPercentage: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#1E3A5F',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F97316',
    borderRadius: 4,
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#132F4C',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  optionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E3A5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetter: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: 'bold',
  },
  optionText: {
    flex: 1,
    color: '#E2E8F0',
    fontSize: 15,
    lineHeight: 20,
  },

  // Result Styles
  resultContainer: {
    padding: 20,
  },
  resultCard: {
    backgroundColor: '#132F4C',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E3A5F',
  },
  resultIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultSubtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 8,
  },
  resultFacultyName: {
    color: '#F97316',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  resultStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#1E3A5F',
  },
  resultStat: {
    alignItems: 'center',
  },
  resultStatNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  resultStatLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  resultStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#1E3A5F',
  },
  exploreButton: {
    backgroundColor: '#F97316',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    gap: 8,
    width: '100%',
    marginBottom: 20,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultNote: {
    color: '#9CA3AF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 8,
  },
  restartButtonText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
});

export default QuizScreen;