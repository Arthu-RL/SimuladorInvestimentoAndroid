import { View, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function InvestmentsHeader({title}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View>
    <TouchableOpacity 
      className="flex-row content-between ml-5 mt-8 pt-10"
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="chevron-back" size={30} color="white" />
      <Text className="text-white font-bold text-3xl">{title}</Text>
    </TouchableOpacity>
  </View>
  )
}