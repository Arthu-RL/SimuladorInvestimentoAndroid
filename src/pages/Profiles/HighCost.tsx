import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function HighRisk () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Alto Risco"/>
    </View>
  )
}