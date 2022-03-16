import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import DeactivateAccount from '../screens/DeactivateAccount/DeactivateAccount';
import Profile from '../screens/Profile1/Profile1';

const Stack = createNativeStackNavigator();

// main stack
const Main = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DeactivateAccount">
      <Main.Screen name="Profile" component={Profile} />
      <Main.Screen name="DeactivateAccount" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount2" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount3" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount4" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount5" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount6" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount7" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount8" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount9" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount10" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount11" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount12" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount22" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount23" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount24" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount25" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount26" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount27" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount28" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount29" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount30" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount31" component={DeactivateAccount} />
      <Main.Screen name="DeactivateAccount32" component={DeactivateAccount} />
    </Main.Navigator>
  )
}


// Manifest of possible screens
const RootStack = createNativeStackNavigator()
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MainStack"
      screenOptions={{ headerShown: false, animationEnabled: false }}
      >
      <RootStack.Screen
        options={{ headerShown: false }}
        name="MainStack"
        component={MainStack}
      />
    </RootStack.Navigator>
  )
}

const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export { RootNavigator, AppNavigator }
