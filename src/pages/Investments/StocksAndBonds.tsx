import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";
import { HeroGlobe } from "@/components/Home/HeroGlobe";
export function StocksAndBonds () {

  return (
    <View className="flex-1">
      <InvestmentsHeader title="Ações e Títulos"/>
    </View>
  )
}