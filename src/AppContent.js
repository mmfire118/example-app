import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { AppNavigator } from './navigations/AppNavigation'

const MainNavigator = AppNavigator

export default AppContent = () => {

  return (
    <>
      <StatusBar />
      <MainNavigator />
    </>
  )
}
