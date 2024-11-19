import { View, Text } from 'react-native';


interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="w-full h-[15%] bg-backgroun ml-5">
      <Text className="text-white font-bold text-4xl mt-8 pt-10">{title}</Text>
      <Text className="text-muted-foreground text-lg">{subtitle}</Text>
    </View>
  );
}
