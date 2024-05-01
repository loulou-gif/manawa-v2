import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Panier from '../pages/Panier'
import Services from '../pages/Services'
import Prestataire from '../pages/Prestataires'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomsTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='services' screenOptions={{headerShown: false}} tabBarBadgeStyle="#DE9F42" activeColor="#7A4D09" inactiveColor="#fff" barStyle={{ backgroundColor: '#AB6E12', height:80, borderTopEndRadius:50 }}>
        <Tab.Screen name='prestation' component={Prestataire} options={{ tabBarIcon: () => (  <MaterialCommunityIcons name='room-service' color="#7A4D09" size={26} /> ),}}/>
        <Tab.Screen name='services' component={Services}  options={{ tabBarIcon: () => (  <Icon name="wrench" color="#7A4D09" size={26} /> ),}}/>
        {/* <Tab.Screen name='Message' component={prestation}/> */}
        <Tab.Screen name='paniers' component={Panier}  options={{ tabBarIcon: () => (  <Icon name="shopping-cart" color="#7A4D09" size={26} /> ),}}/>
    </Tab.Navigator>
  )
}

export default BottomsTabs