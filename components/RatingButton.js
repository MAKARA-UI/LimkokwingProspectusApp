import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RatingButton = ({ courseId, initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  //Loading saved rating
  useEffect(() => {
    const loadRating = async () => {
      const stored = await AsyncStorage.getItem(`rating_${courseId}`);
      if (stored) setRating(parseInt(stored));
    };
    loadRating();
  }, [courseId]);
  //Handling a press
  const handleRate = async () => {
    if (rating < 5) {
      const newRating = rating + 1;
      setRating(newRating);
      await AsyncStorage.setItem(`rating_${courseId}`, newRating.toString());
      onRate(newRating);
    }
  };
  //Returning the button
  return (
    <TouchableOpacity
      onPress={handleRate}
      style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 12 }}
    >
      <Text style={{ color: 'white' }}>Rate +1 (Current: {rating})</Text>
    </TouchableOpacity>
  );
};

export default RatingButton;
