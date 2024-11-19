import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tooltip } from '@/components/ui/Tooltip';
import { Countdown } from './Countdown';
import { Chart } from './Chart';
import { useUserAccount } from '@/providers/userAccountProvider';
import { getAssetVariation, calculateTotalHoldingsValue } from '@/utils/number';
import { NumberDisplay } from './NumberDisplay';
import { useInvestmentAssets } from '@/providers/InvestmentAssetsProvider';

export function Summary() {
  const { assets } = useInvestmentAssets();
  const { user } = useUserAccount();

  const totalAssets = user.currentWallet.reduce((total, asset) => {
    return calculateTotalHoldingsValue(total, assets, asset);
  }, 0);

  const holdingsDifference = getAssetVariation(
    user.walletHistory.at(-2)?.wallet.reduce((total, asset) => {
      return calculateTotalHoldingsValue(total, assets, asset);
    }, 0) ?? 0,
    user.walletHistory.at(-1)?.wallet.reduce((total, asset) => {
      return calculateTotalHoldingsValue(total, assets, asset);
    }, 0) ?? 0,
  );

  const profitabilityDifference = getAssetVariation(
    user.profitabilityHistory.at(-2)?.profitability ?? 0,
    user.profitabilityHistory.at(-1)?.profitability ?? 0,
  );

  const balanceDifference = getAssetVariation(
    user.balanceHistory.at(-2)?.balance ?? 10000,
    user.balanceHistory.at(-1)?.balance ?? 10000,
  );

  return (
    <View className="flex flex-row flex-wrap gap-5 mb-5">
      <Countdown/>
      <Card id='balance'>
        <CardHeader>
          <CardTitle>Saldo</CardTitle>
          <FontAwesome5 name="wallet" size={20} color="white"/>
        </CardHeader>
        <CardContent>
          <NumberDisplay value={user.currentBalance} valueDifference={balanceDifference} animated />
          <Tooltip/>
        </CardContent>
      </Card>

      <Card id='holdings'>
        <CardHeader>
          <CardTitle>Patrimônio em Ativos</CardTitle>
          <FontAwesome5 name="coins" size={24} color="white" />
        </CardHeader>
        <CardContent>
          <NumberDisplay value={totalAssets} valueDifference={holdingsDifference} animated />
        </CardContent>
      </Card>

      <Card id='profitability'>
        <CardHeader>
          <CardTitle>Rentabilidade Total</CardTitle>
          <Feather name="dollar-sign" size={24} color="white" />
        </CardHeader>
        <CardContent>
        <NumberDisplay
            value={user.currentProfitability}
            valueDifference={profitabilityDifference}
            animated
          />
        </CardContent>
      </Card>
      <Chart/>
    </View>
  );
}