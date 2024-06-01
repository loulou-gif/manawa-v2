import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './pages/Start';
import Signup from './pages/Signup';
import Otpcode from './pages/Otpcode';
import Services from './pages/Services';
// import Tests from './pages/Tests';
import Account from './pages/Account';
// import Prestataire from './pages/Prestataires';
// import Panier from './pages/Panier';
import BottomsTabs from './routes/BottomsTabs';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import Aperçu from './pages/Aperçu';
import Avis from './pages/Avis';
import Login from './pages/Login';
import FiltreService from './pages/FiltreService';
import { auth } from './firebase/config';
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  // const Stack = createNativeStackNavigator();
  const [isLogged, setIsLogged] = useState(null);

  // Utiliser useEffect pour vérifier l'état de la connexion ici
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  if (isLogged === null) {
    // Vous pouvez afficher un écran de chargement ici
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer initialRouteName={isLogged ? 'tabs' : 'Start'}>
      <Stack.Navigator>
        <Stack.Screen name='tabs' component={BottomsTabs} options={{headerShown:false}} />
        <Stack.Screen name='Start' component={Start} options={{headerShown:false}} />
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}} />
        <Stack.Screen name='Otpcode' component={Otpcode} options={{headerShown:false}}  />
        {/* <Stack.Screen name='Services' component={Services} /> */}
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Aperçu' component={Aperçu} />
        <Stack.Screen name='Avis' component={Avis} />
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Boutique' component={FiltreService} />
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
