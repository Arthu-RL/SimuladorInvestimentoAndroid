import { createBottomTabNavigator, BottomTabNavigationProp,  } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Simulator } from "../pages/Simulator";
import { Investments } from "../pages/Investments";
import { ExternalResources } from "../pages/ExternalResources";
import { TabIcon } from "@/components/ui/TabIcon";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { InvestmentStack } from "./stack.routes";

type AppRoutes = {
  home: undefined;
  simulator: undefined;
  investments: undefined;
  externalResources: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A8A29E',
        tabBarStyle: {  height: '10%', backgroundColor: '#1C1917' },
        tabBarItemStyle: { paddingTop: 5 },
        tabBarLabelStyle: {
          marginTop: 10,
          fontSize: 11, 
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome6} 
              name="chart-bar" 
              color={color} 
              focused={focused} 
              size={28}
            />
          )
        }}
      />

      <Screen
        name="investments"
        component={InvestmentStack}
        options={{
          tabBarLabel: 'Investimentos',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome6} 
              name="arrow-trend-up" 
              color={color} 
              focused={focused} 
              size={28}
            />
          ),
        }}
      />

      <Screen
        name="simulator"
        component={Simulator}
        options={{
          tabBarLabel: 'Simulador',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={MaterialIcons} 
              name="videogame-asset" 
              color={color} 
              focused={focused} 
              size={32}
            />
          ),
        }}
      />

      <Screen
        name="externalResources"
        component={ExternalResources}
        options={{
          tabBarLabel: 'Recursos Externos',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome5} 
              name="link" 
              color={color} 
              focused={focused} 
              size={27}
            />
          ),
        }}
      />
    </Navigator>
  );
}