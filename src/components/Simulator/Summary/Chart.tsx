import React from "react";
import { View, Text } from "react-native";
import { Activity } from "lucide-react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useUserAccount } from "@/providers/userAccountProvider";
import { calculateWeekTotalProfit } from "@/utils/number";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { usePreviousValue } from "@/hooks/usePreviousValue";
import { getWeekdayLabelFromDate } from "@/utils/date";
import { formatCurrency } from "@/utils/currency";
import { generateCurrentWeekData } from "@/utils/chart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Feather from '@expo/vector-icons/Feather';


const screenWidth = Dimensions.get("window").width;

export const Chart = () => {
  const { user } = useUserAccount();
  const weekTotalProfitability = calculateWeekTotalProfit(user.profitabilityHistory);
  const chartData = generateCurrentWeekData(user.profitabilityHistory);

  const { value, previousValue } = usePreviousValue(weekTotalProfitability);
  const { count, countTextColor } = useAnimatedCounter(previousValue, value, 3000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rentabilidade Semanal</CardTitle>
        <Feather name="activity" size={24} color="white" />
      </CardHeader>

      <CardContent className="flex-col">
        <Text className={`text-4xl font-bold brightness-110 transition-all  text-foreground pb-2 ${countTextColor}`}>
          {formatCurrency(count, "BRL", "pt-BR")}
        </Text>
        <Text className="text-muted-foreground">
          Rentabilidade acumulada nesta semana
        </Text>

        <View className="ml-[-22] mt-5">
          <LineChart
            data={{
              labels: chartData.map((item) =>
                getWeekdayLabelFromDate(new Date(item.date))
              ),
              datasets: [
                {
                  data: chartData.map((item) => item.profitability),
                },
              ],
            }}
            width={screenWidth - 70} // Largura ajustada para tela com margens
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#09090B",
              backgroundGradientTo: "#09090B",
              color: () => "#FFFFFF",
              labelColor: () => "#555",
              propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: "#FFFFFF",
              },
            }}
            style={{ borderRadius: 8 }}
          />
        </View>
      </CardContent>
    </Card>
  );
};
