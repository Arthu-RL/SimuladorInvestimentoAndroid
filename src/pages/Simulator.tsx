import { ScrollView, View, Text } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Summary } from '@/components/Simulator/Summary/Summary'
import Chart from '@/components/Simulator/Modal/Chart';

export function Simulator() {
  let myDate: Date;
  myDate = new Date('2024-11-20 21:10:12');
  let myDate2: Date;
  myDate2 = new Date('2024-11-21 21:20:13');
  let myDate3: Date;
  myDate3 = new Date('2024-11-22 21:30:14');
  let myDate4: Date;
  myDate4 = new Date('2024-11-23 21:40:15');

  return (
    <View className="flex-1 w-full bg-background">
      <Header 
        title='Simulador de Investimentos' 
        subtitle='Controle seus investimentos e acompanhe o seu progresso'
      />
      <ScrollView>
        <View className='m-5'>
          <Summary/>
          <Chart assetHistory={[{value: 1 , timestamp: myDate },{value: 2 , timestamp: myDate2 },{value: 3 , timestamp: myDate3 },{value: 4 , timestamp: myDate4 }]}/>
        </View>
      </ScrollView>
    </View>
  )
}