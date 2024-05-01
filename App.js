import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './pages/Start';
import Signup from './pages/Signup';
import Otpcode from './pages/Otpcode';
import Services from './pages/Services';
import Tests from './pages/Tests';
import Account from './pages/Account';
import Prestataire from './pages/Prestataires';
import Panier from './pages/Panier';
import BottomsTabs from './routes/BottomsTabs';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Services' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Tabs' component={BottomsTabs} />
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Otpcode' component={Otpcode} />
        <Stack.Screen name='Services' component={Services} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Prestataires' component={Prestataire} />
        {/* <Stack.Screen name='Panier' component={Panier} /> */}
        <Stack.Screen name='Tests' component={Tests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
