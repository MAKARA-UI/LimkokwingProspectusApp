import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FacultyScreen from '../screens/FacultyScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import AllFacultiesScreen from '../screens/AllFacultiesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
  
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Faculty" 
          component={FacultyScreen} 
          options={({ route }) => ({ 
            title: route.params.faculty.name,
            headerBackTitle: 'Back'
          })} 
        />
        <Stack.Screen 
          name="CourseDetail" 
          component={CourseDetailScreen} 
          options={({ route }) => ({ 
            title: route.params.course.name,
            headerBackTitle: 'Back'
          })} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen} 
          options={{ 
            title: 'Career Guide Quiz',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="AllFaculties" 
          component={AllFacultiesScreen} 
          options={{ 
            headerShown: false,
            presentation: 'modal' 
          }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ 
            title: 'About Limkokwing',
            headerBackTitle: 'Back'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;