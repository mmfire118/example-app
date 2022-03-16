import React, { useEffect } from 'react'
import { AppRegistry, LogBox } from 'react-native'
import AppContent from './src/AppContent'
import {NativeBaseProvider, extendTheme, theme as nbTheme} from 'native-base';
import 'react-native-gesture-handler'

const App = () => {

  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
    },
    colors: {
      primary: nbTheme.colors.blue,
    },
  });

  useEffect(() => {
    LogBox.ignoreAllLogs(true)
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <AppContent />
    </NativeBaseProvider>
  )
}

App.propTypes = {}

App.defaultProps = {}

AppRegistry.registerComponent('App', () => App)

export default App
