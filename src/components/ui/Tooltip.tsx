import { TouchableOpacity, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export function Tooltip() {
  const text = 'Atenção: Este saldo é fictício e se refere a um simulador. Não representa valores reais.'

  function handlePress(){
    return Alert.alert('Atenção',`${text}`)
  }

  return (
    <TouchableOpacity 
      onPress={handlePress}
    >
      <Feather name="alert-circle" size={24} color="white" style={{paddingTop: 10}} />
    </TouchableOpacity>
  );
}