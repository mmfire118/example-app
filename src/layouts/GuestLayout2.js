import React from 'react';
import { Box, StatusBar, Center, Stack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function GuestLayout(props) {
  return <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop _light={{
      bg: 'primary.900'
    }} _dark={{
      bg: 'coolGray.900'
    }} />
        <Center flex="1" my="auto" p={{
        md: 8
      }} _dark={{
        bg: 'coolGray.900'
      }} _light={{
        bg: {
          md: '#2E165B',
          base: 'primary.900'
        }
      }}>
          <Stack w="100%" maxW={{
          md: '1016px'
        }} flex={{
          base: '1',
          md: undefined
        }} flexDirection={{
          base: 'column',
          md: 'row'
        }}>
            {props.children}
          </Stack>
        </Center>
    </>;
}