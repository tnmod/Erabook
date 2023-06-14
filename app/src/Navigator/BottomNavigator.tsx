import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import TabBottomBarCustom from '../customs/TabBottomBarCustom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeHeader from '../screens/home/HomeHeader';
import Account from '../screens/Account/Account';


const Tab = createBottomTabNavigator();
const BottomNavigator: React.FC = () => {

  return (
    <Tab.Navigator tabBar={(props) => <TabBottomBarCustom {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          header: (props) => <HomeHeader />
        }} />
      < Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="Feeds" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Account} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})