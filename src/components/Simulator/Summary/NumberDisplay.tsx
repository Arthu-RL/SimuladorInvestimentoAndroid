import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { usePreviousValue } from '@/hooks/usePreviousValue';
import { formatCurrency } from '@/utils/currency';
import { formatNumberWithSign } from '@/utils/number';
import { View, Text } from 'react-native';

type NumberDisplayProps = {
  value: number;
  animated?: boolean;
  valueDifference: number;
};

export const NumberDisplay = ({ value, valueDifference, animated = false }: NumberDisplayProps) => {
  const { previousValue } = usePreviousValue(value);
  const { count, countTextColor } = useAnimatedCounter(animated ? previousValue : value, value, 2300);

  return (
    <View>
      <Text
        className={`text-4xl font-bold brightness-110 transition-all  text-foreground pb-2text-2xl ${countTextColor}`}
      >
        {formatCurrency(count, 'BRL', 'pt-BR')}
      </Text>
      <Text className="text-base text-muted-foreground">
        {formatNumberWithSign(valueDifference)}% em relação ao dia anterior
      </Text>
    </View>
  );
};
