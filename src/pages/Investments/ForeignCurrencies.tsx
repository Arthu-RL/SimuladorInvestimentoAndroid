import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function ForeignCurrencies () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Moedas Estrangeiras"/>
    </View>
  )
}