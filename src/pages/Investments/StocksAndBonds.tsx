import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function StocksAndBonds () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Ações e Títulos"/>
    </View>
  )
}