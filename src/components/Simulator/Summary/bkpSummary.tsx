import React from 'react';
import { View, Text } from 'react-native';
// import { useInvestmentAssets } from '@/providers/InvestmentAssetsProvider';
// import { useUserAccount } from '@/providers/userAccountProvider';
// import { calculateTotalHoldingsValue, getAssetVariation } from '@/utils/number';
import { CircleAlert, Coins, DollarSign, Wallet } from 'lucide-react-native'; 
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
// import { Countdown } from './Countdown';
// import { NumberDisplay } from './NumberDisplay';
// import { Chart } from './Chart';



export function SummaryBkp() {
  // const { assets } = useInvestmentAssets();
  // const { user } = useUserAccount();

  // const totalAssets = user.currentWallet.reduce(({total, asset}: any) => {
  //   return calculateTotalHoldingsValue(total, assets, asset);
  // }, 0);

  // const holdingsDifference = getAssetVariation(
  //   user.walletHistory.at(-2)?.wallet.reduce(({total, asset}: any) => {
  //     return calculateTotalHoldingsValue(total, assets, asset);
  //   }, 0) ?? 0,
  //   user.walletHistory.at(-1)?.wallet.reduce(({total, asset}: any) => {
  //     return calculateTotalHoldingsValue(total, assets, asset);
  //   }, 0) ?? 0,
  // );

  // const profitabilityDifference = getAssetVariation(
  //   user.profitabilityHistory.at(-2)?.profitability ?? 0,
  //   user.profitabilityHistory.at(-1)?.profitability ?? 0,
  // );

  // const balanceDifference = getAssetVariation(
  //   user.balanceHistory.at(-2)?.balance ?? 10000,
  //   user.balanceHistory.at(-1)?.balance ?? 10000,
  // );

  return (
    <View className="flex flex-row flex-wrap gap-4">
      <View className="flex flex-col gap-6 w-full lg:w-1/4">
        {/* <Countdown /> */}
        <View className="bg-chart p-4 rounded-lg shadow-md ">
          <View className="flex flex-row justify-between items-center pb-2">
            <Text className="text-sm font-medium text-muted-foreground">Saldo</Text>
            <FontAwesome5 name="wallet" size={24} color="white" className="h-4 w-4 text-muted-foreground" />
          </View>
          <View className="relative">
            {/* <NumberDisplay value={user.currentBalance} valueDifference={balanceDifference} animated /> */}
            <View className="absolute bottom-2 right-2">
              <Feather name="alert-circle" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>

      <View className="bg-chart p-4 rounded-lg shadow-md w-full lg:w-1/4">
        <View className="flex flex-row justify-between items-center pb-2">
          <Text className="text-sm font-medium text-muted-foreground">Patrimônio em Ativos</Text>
          <FontAwesome5 name="coins" size={24} color="white" />
        </View>
        {/* <NumberDisplay value={totalAssets} valueDifference={holdingsDifference} animated /> */}
      </View>

      <View className="bg-chart p-4 rounded-lg shadow-md w-full lg:w-1/4">
        <View className="flex flex-row justify-between items-center pb-2">
          <Text className="text-sm font-medium text-muted-foreground">Rentabilidade Total</Text>
          <Feather name="dollar-sign" size={24} color="white" />
        </View>
        {/* <NumberDisplay
          value={user.currentProfitability}
          valueDifference={profitabilityDifference}
          animated
        /> */}
      </View>

      {/* <View className="w-full lg:w-1/4">
        <Chart />
      </View> */}
    </View>
  );
}