import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native"
import { NativeModule } from 'expo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfireScreen from './screens/ProfireScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
 <PaperProvider>
<NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} options={{
    title: 'Tela Inicial',
    headerStyle: { backgroundColor: 'green' },
    headerTintColor: '#fff',
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ color, size }) => {
      <Ionicons name="home" size={size} color={color} />
    },
  }
  }/>
    <Tab.Screen name="Profile" component={ProfireScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
</NavigationContainer>
 </PaperProvider>
  );
}


