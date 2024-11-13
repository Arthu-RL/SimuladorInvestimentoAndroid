declare module 'react-native-vector-icons/Ionicons' {
  import { IconProps } from 'react-native-vector-icons/Icon';
  import { ComponentClass } from 'react';
  
  const Ionicons: ComponentClass<IconProps>;
  export default Ionicons;
}

declare module 'react-native-vector-icons/Feather' {
  import { Icon } from 'react-native-vector-icons/Icon';
  const Feather: Icon;
  export = Feather;
}