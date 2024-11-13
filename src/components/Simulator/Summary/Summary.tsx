import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tooltip } from '@/components/ui/Tooltip';
import { Countdown } from './Countdown';


export function Summary() {
  return (
    <View className="flex flex-row flex-wrap gap-5 mb-5">
      <Countdown/>
      <Card id='balance'>
        <CardHeader>
          <CardTitle>Saldo</CardTitle>
          <FontAwesome5 name="wallet" size={20} color="white"/>
        </CardHeader>
        <CardContent>
          {/* <NumberDisplay value={totalAssets} valueDifference={holdingsDifference} animated /> */}
          <Text className="text-4xl font-bold brightness-110 transition-all text-foreground pb-2">R$ 9.825,12</Text>
        </CardContent>
        <CardFooter>
          <CardDescription>
            -1.75% em relação ao dia anterior
          </CardDescription>
          <Tooltip/>
        </CardFooter>
      </Card>

      <Card id='holdings'>
        <CardHeader>
          <CardTitle>Patrimônio em Ativos</CardTitle>
          <FontAwesome5 name="coins" size={24} color="white" />
        </CardHeader>
        <CardContent>
          {/* <NumberDisplay value={totalAssets} valueDifference={holdingsDifference} animated /> */}
          <Text className="text-4xl font-bold brightness-110 transition-all  text-foreground pb-2">
            R$ 48,22
          </Text>
        </CardContent>
        <CardFooter>
          <CardDescription>
            +48,22% em realação ao dia anterior
          </CardDescription>
        </CardFooter>
      </Card>

      <Card id='profitability'>
        <CardHeader>
          <CardTitle>Rentabilidade Total</CardTitle>
          <Feather name="dollar-sign" size={24} color="white" />
        </CardHeader>
        <CardContent>
          {/* <NumberDisplay value={totalAssets} valueDifference={holdingsDifference} animated /> */}
          <Text className="text-4xl font-bold brightness-110 transition-all  text-foreground pb-2">
            R$ 0,00
          </Text>
        </CardContent>
        <CardFooter>
          <CardDescription>
            0.00% em relação ao dia anterior
          </CardDescription>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rentabilidade Semanal</CardTitle>
          <Feather name="activity" size={24} color="white" />
        </CardHeader>
        <CardContent>
          <Text className="text-4xl font-bold brightness-110 transition-all  text-foreground pb-2">
            R$ 0,00
          </Text>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Rentabilidade acumulada nesta semana
          </CardDescription>
        </CardFooter>
        <View className="w-full lg:w-1/4">
          {/* <Chart/> */}
        </View>
      </Card>
    </View>
  );
}