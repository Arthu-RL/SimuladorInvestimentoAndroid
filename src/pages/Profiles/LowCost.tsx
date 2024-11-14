import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function LowRisk () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Baixo Risco"/>
    </View>
  )
}