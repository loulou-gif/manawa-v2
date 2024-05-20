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
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import Aperçu from './pages/Aperçu';
import Avis from './pages/Avis';
import FiltreService from './pages/FiltreService';
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Services'>
        <Stack.Screen name='tabs' component={BottomsTabs} options={{headerShown:false}} />
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Otpcode' component={Otpcode} />
        {/* <Stack.Screen name='Services' component={Services} /> */}
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Aperçu' component={Aperçu} />
        <Stack.Screen name='Avis' component={Avis} />
        <Stack.Screen name='FiltreService' component={FiltreService} />
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
