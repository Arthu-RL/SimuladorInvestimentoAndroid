import React, { createContext, useContext, useMemo, forwardRef, useId } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { cn } from '@/lib/utils';


// type ChartConfig = {
//   [key: string]: {
//     label?: React.ReactNode;
//     icon?: React.ComponentType;
//   } & ({ color?: string } | { theme: Record<'light' | 'dark', string> });
// };
type ChartConfigItem =
| {
  label?: React.ReactNode;
  icon?: React.ComponentType;
  color?: string;
} | {
      label?: React.ReactNode;
      icon?: React.ComponentType;
      theme: Record<'light' | 'dark', string>;
    };
    
    type ChartContextProps = {
      config: ChartConfig;
    };
    
type ChartConfig = Record<string, ChartConfigItem>;

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }
  return context;
}

interface ChartContainerProps {
  config: ChartConfig;
  children: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ config, children }) => {
  const chartId = useId();

  return (
    <ChartContext.Provider value={{ config }}>
      <View className="flex aspect-video justify-center">
        <ChartStyle id={chartId} config={config} />
        {children}
      </View>
    </ChartContext.Provider>
  );
};

const ChartStyle: React.FC<{ id: string; config: ChartConfig }> = ({ id, config }) => {
  // No suporte direto a estilos dinâmicos no React Native como no DOM, ajustes podem ser feitos aqui.
  return null;
};

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: Array<any>;
  hideLabel?: boolean;
  labelFormatter?: (value: any) => React.ReactNode;
  formatter?: (value: any, name: string) => React.ReactNode;
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  hideLabel = false,
  labelFormatter,
  formatter,
}) => {
  const { config } = useChart();

  if (!active || !payload?.length) {
    return null;
  }

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const itemConfig = config[item.dataKey];
    const value = itemConfig?.label || item.name;

    if (labelFormatter) {
      return labelFormatter(value);
    }

    return value ? <Text className="font-medium">{value}</Text> : null;
  }, [hideLabel, payload, config, labelFormatter]);

  return (
    <View className="p-2 rounded bg-background shadow">
      {tooltipLabel}
      {payload.map((item, index) => (
        <View key={index} className="flex-row items-center gap-2">
          <Text>{item.name}</Text>
          <Text>{formatter ? formatter(item.value, item.name) : item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const ChartLegendContent: React.FC<{ payload: any[] }> = ({ payload }) => {
  const { config } = useChart();

  return (
    <View className="flex-row justify-center gap-4">
      {payload.map((item) => {
        const itemConfig = config[item.dataKey];
        const backgroundColor =
          'color' in itemConfig ? itemConfig.color : itemConfig.theme?.light;

        return (
          <View key={item.value} className="flex-row items-center gap-1">
            <View
              style={[styles.legendIcon, { backgroundColor }]}
            />
            <Text>{itemConfig?.label || item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  legendIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
