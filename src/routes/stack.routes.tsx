import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Investments } from "@/pages/Investments";
import { StocksAndBonds } from "@/pages/Investments/StocksAndBonds";
import { FixedIncome } from "@/pages/Investments/FixedIncome";
import { PhysicalRealEstate } from "@/pages/Investments/PhysicalRealEstate";
import { RealEstateFunds } from "@/pages/Investments/RealEstateFunds";
import { InvestmentFunds } from "@/pages/Investments/InvestmentFunds";
import { Commodities } from "@/pages/Investments/Commodities";
import { ForeignCurrencies } from "@/pages/Investments/ForeignCurrencies";
import { Cryptocurrency } from "@/pages/Investments/Cryptocurrency";
import { LowRisk } from "@/pages/Profiles/LowCost";
import { ModerateRisk } from "@/pages/Profiles/MidCost";
import { HighRisk } from "@/pages/Profiles/HighCost";


export type InvestmentStackRoutes = {
  Investments: undefined;
  StocksAndBonds: undefined;
  FixedIncome: undefined;
  PhysicalRealEstate: undefined;
  RealEstateFunds: undefined;
  InvestmentFunds: undefined;
  Commodities: undefined;
  ForeignCurrencies: undefined;
  Cryptocurrency: undefined;
  LowRisk: undefined;
  ModerateRisk: undefined;
  HighRisk: undefined;
};

const Stack = createNativeStackNavigator<InvestmentStackRoutes>();

export function InvestmentStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false,
      }}>
      <Stack.Screen
        name="Investments"
        component={Investments}
      />
      <Stack.Screen
        name="StocksAndBonds"
        component={StocksAndBonds}
      />
      <Stack.Screen
        name="FixedIncome"
        component={FixedIncome}
      />
      <Stack.Screen
        name="PhysicalRealEstate"
        component={PhysicalRealEstate}
      />
      <Stack.Screen
        name="RealEstateFunds"
        component={RealEstateFunds}
      />
      <Stack.Screen
        name="InvestmentFunds"
        component={InvestmentFunds}
      />
      <Stack.Screen
        name="Commodities"
        component={Commodities}
      />
      <Stack.Screen
        name="ForeignCurrencies"
        component={ForeignCurrencies}
      />
      <Stack.Screen
        name="Cryptocurrency"
        component={Cryptocurrency}
      />
      <Stack.Screen
        name="LowRisk"
        component={LowRisk}
      />
      <Stack.Screen
        name="ModerateRisk"
        component={ModerateRisk}
      />
      <Stack.Screen
        name="HighRisk"
        component={HighRisk}
      />
    </Stack.Navigator>
  );
}