import { ScrollView, View, Text } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InvestmentStackRoutes } from '@/routes/stack.routes'


export type InvestmentsScreenNavigationProp = NativeStackNavigationProp<InvestmentStackRoutes, 'Investments'>;


export function Investments() {

  const navigation = useNavigation<InvestmentsScreenNavigationProp>()

  return (
    <View className="flex-1 bg-background">
      <Header title='Investimentos'/>
      
        <View className='m-5 mb-0 h-[30%] border border-border p-3'>
          <ScrollView>
            <Button
              title='Ações e Títulos'
              onPress={() => navigation.navigate('StocksAndBonds')}

            />
            <Button
              title='Renda Fixa'
              onPress={() => navigation.navigate('FixedIncome')}
            />
            <Button
              title='Imóveis Físicos'
              onPress={() => navigation.navigate('PhysicalRealEstate')}
            />
            <Button
              title='Fundos Imobiliários'
              onPress={() => navigation.navigate('RealEstateFunds')}
            />
            <Button
              title='Fundos de Investimento'
              onPress={() => navigation.navigate('InvestmentFunds')}
            />
            <Button
              title='Commodities'
              onPress={() => navigation.navigate('Commodities')}
            />
            <Button
              title='Moedas Estrangeiras'
              onPress={() => navigation.navigate('ForeignCurrencies')}
            />
            <Button
              title='Criptomoedas'
              onPress={() => navigation.navigate('Cryptocurrency')}
            />
          </ScrollView>
        </View>

      <View className="w-full bg-backgroun ml-5 mt-10 mb-10">
        <Text className="text-white font-bold text-3xl">Perfis</Text>
      </View>
      
      <View className='m-5 mt-0 border border-border p-3'>
          <ScrollView>
            <Button
              title='Baixo Risco'
              onPress={() => navigation.navigate('LowRisk')}
            />
            <Button
              title='Médio Risco'
              onPress={() => navigation.navigate('ModerateRisk')}
            />
            <Button
              title='Alto Risco'
              onPress={() => navigation.navigate('HighRisk')}
            />
          </ScrollView>
        </View>

      
    </View>
  )
}