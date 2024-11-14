import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function FixedIncome () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Renda Fixa"/>
    </View>
  )
}