import React from 'react';
import {NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from './App/Pages/Home';
import Search from './App/Pages/Search';
import Planner from './App/Pages/Planner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from './App/Pages/Mapview';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false, 
  tabBarShowLabel: false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 70,
    background: "#fff"
  }
}

function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            <Icon name="credit-card" type="material-icons" size={35} color={focused ? "#16247d": "#111"} />
                            <Text>Virtual Card</Text>
                        </View>
                    )
                }
            }}
            />
            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            <Icon name="search" type="font-awesome" size={35} color={focused ? "#16247d": "#111"} />
                            <Text>Search</Text>
                        </View>
                    )
                }
            }}
            />
            <Tab.Screen
            name="Planner"
            component={Planner}
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            <Icon name="event" type="material-icons" size={35} color={focused ? "#16247d": "#111"} />
                            <Text>Planner</Text>
                        </View>
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default function App() {
  return (
    <NativeBaseProvider>
       <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="Facilities" component={MapView}  />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            </Stack.Navigator> 
        </NavigationContainer>
    </NativeBaseProvider>
 
  );
}


