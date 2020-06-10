import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SearchScreen from './src/screens/SearchScreen'
import ResultScreen from './src/screens/ResultScreen'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#6495ED'
          }
        }}
      >
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

