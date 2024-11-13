import React from 'react';
import { View, Text } from 'react-native';
// import { useMarketRefresh } from '@/providers/marketRefreshProvider';
import { formatRemainingTime } from '@/utils/date';

export const Countdown = () => {
  // const { remainingSeconds } = useMarketRefresh();

  return (
    <View className="my-auto flex flex-col gap-1 px-0.5">
      <Text id="refresh" className="w-fit text-lg font-medium text-muted-foreground max-5xl:text-xs">
        Próxima Atualização em: 60s
        {/* {formatRemainingTime(remainingSeconds)} */}
      </Text>
    </View>
  );
};
