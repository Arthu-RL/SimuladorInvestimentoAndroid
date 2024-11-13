import { Header } from '@/components/ui/Header'
import { View } from 'react-native'

export function Home() {

  return (
    <View className="flex-1 w-full bg-background">
      <Header title='Home'/>
    </View>
  )
}