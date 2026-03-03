import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RatingButton = ({ courseId, initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    const loadRating = async () => {
      const stored = await AsyncStorage.getItem(`rating_${courseId}`);
      if (stored) setRating(parseInt(stored));
    };
    loadRating();
  }, [courseId]);

  const handleRate = async () => {
    if (rating < 6) {
      const newRating = rating + 1;
      setRating(newRating);
      await AsyncStorage.setItem(`rating_${courseId}`, newRating.toString());
      onRate(newRating);
    }
  };

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
