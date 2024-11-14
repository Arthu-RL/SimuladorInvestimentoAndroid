import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function Cryptocurrency () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Criptomoedas"/>
    </View>
  )
}