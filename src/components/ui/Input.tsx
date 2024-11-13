import { TextInput, View, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <View className="w-full p-2.5">
      <TextInput
        className="w-full bg-chart p-2.5 text-base mt-0.5 rounded-xl shadow border border-border"
        {...rest}
      />
    </View>
  );
}
