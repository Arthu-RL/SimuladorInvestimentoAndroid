import React from 'react';
import { View, Text } from 'react-native';
import { Card , CardContent , CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { ChartContainer } from '@/components/ui/chart';
import { formatCurrency } from '@/utils/currency';
import { formatLabelTimestamp, formatTickTimestamp } from '@/utils/date';
import { Assets } from '@/lib/schemas/assets.schema';
import { generateAssetHistoryChartData } from '@/utils/chart';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

type ChartProps = {
  assetHistory: Assets['history'];
};

const Chart = ({ assetHistory }: ChartProps) => {
  const lastTenEntries = generateAssetHistoryChartData(assetHistory).slice(
    assetHistory.length >= 10 ? assetHistory.length - 10 : 0
  );

  const chartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFrom: "#09090B",
    backgroundGradientTo: "#09090B",
    decimalPlaces: 2,
    color: (opacity = 1) => `#FFFFFF`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#FFFFFF",
    },
  };

  return (
    <Card>
      <CardHeader>
        <View>
          <CardTitle  className='text-foreground'>Histórico de Preços Recentes</CardTitle>
          <CardDescription className='mt-2 mb-8'>
            Este gráfico apresenta os últimos valores do ativo, destacando as tendências e variações de preço.
          </CardDescription>
        </View>
      </CardHeader>
      <CardContent className="ml-[-10] mb-4">
        {assetHistory.length ? (
          <ChartContainer  config={{ mobile: { label: 'Mobile', color: '#FFFFFF' } }}>
            <LineChart
              data={{
                labels: lastTenEntries.map(({ timestamp }) => formatTickTimestamp(new Date(timestamp))),
                datasets: [
                  {
                    data: lastTenEntries.map(({ value }) => value),
                    strokeWidth: 2,
                    color: () => `#FFFFFF`
                  }
                ]
              }}
              width={Dimensions.get('window').width - 55}
              height={230}
              chartConfig={chartConfig}
              withVerticalLines={false}
              withHorizontalLines={false}
            />
          </ChartContainer>
        ) : (
          <View className="flex h-72 justify-center items-center">
            <Text className="text-center text-sm">Os dados necessários para gerar o gráfico ainda não estão disponíveis.</Text>
          </View>
        )}
      </CardContent>
    </Card>
  );
};

export default Chart;
