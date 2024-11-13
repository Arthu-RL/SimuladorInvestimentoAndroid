import { View, Text } from 'react-native';


interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="w-full h-[20%] bg-backgroun items-center justify-center">
      <Text className="text-white font-bold text-3xl mt-12">{title}</Text>
      <Text className="text-muted-foreground">{subtitle}</Text>
    </View>
  );
}
