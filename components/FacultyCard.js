import { View, Text, Image, TouchableOpacity } from 'react-native';

const FacultyCard = ({ faculty, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 10, alignItems: 'center' }}>
      <Image source={{ uri: faculty.image }} style={{ width: 200, height: 100 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{faculty.name}</Text>
    </TouchableOpacity>
  );
};

export default FacultyCard;