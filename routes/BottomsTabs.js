import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Panier from '../pages/Panier';
import Services from '../pages/Services';
import Prestataire from '../pages/Prestataires';
import Tests from '../pages/Tests';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Parametres from '../pages/Parametres';

const BottomsTabs = () => {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='Service'
            screenOptions={{
                headerShown: false
            }}
            tabBarBadgeStyle="#DE9F42"
            activeColor="#fff"
            inactiveColor="#7A4D09"
            barStyle={{
                backgroundColor: '#DF972A',
                height: 80,
                borderTopEndRadius: 50
            }}
        >
            <Tab.Screen
                name='Prestataires'
                component={Prestataire}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name='room-service-outline'
                            color="#7A4D09"
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Service'
                component={Services}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="tools"
                            color="#7A4D09"
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Panier'
                component={Panier}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            name="shopping-cart"
                            color="#7A4D09"
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Parametres'
                component={Parametres}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="account"
                            color="#7A4D09"
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomsTabs;
