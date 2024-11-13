import { ScrollView, View, Text } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Summary } from '@/components/Simulator/Summary/Summary'

export function Simulator() {

  return (
    <View className="flex-1 w-full bg-background">
      <Header 
        title='Simulador de Investimentos' 
        subtitle='Controle seus investimentos e acompanhe o seu progresso'
      />
      <ScrollView>
        <View className='m-5'>

        </View>
      </ScrollView>
    </View>
  )
}