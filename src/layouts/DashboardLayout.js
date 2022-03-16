import React from 'react';
import { Box, VStack, StatusBar, ScrollView, HStack, Pressable, Icon, Image, Text, Hidden, useColorMode, IconButton, Divider, Menu, Avatar, Button, Input } from 'native-base';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../Core/onboarding/hooks/useAuth.js'
import Sidebar from '../components/Sidebar';

export function Header(props) {
  const {
    colorMode
  } = useColorMode();
  return <Box px="6" pt="3" pb="3" borderBottomWidth="1" _dark={{
    bg: 'coolGray.900',
    borderColor: 'coolGray.800'
  }} _light={{
    bg: {
      base: 'primary.900',
      md: 'white'
    },
    borderColor: 'coolGray.200'
  }}>
      <VStack alignSelf="center" width="100%" maxW={props.menuButton ? null : '1016px'}>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="4" alignItems="center">
            {props.menuButton && <IconButton variant="ghost" colorScheme="light" onPress={props.toggleSidebar} icon={<Icon size="6" name="menu-sharp" as={Ionicons} _light={{
            color: 'coolGray.800'
          }} _dark={{
            color: 'coolGray.50'
          }} />} />}

            {colorMode === 'light' ? <Image h="10" w="56" alt="NativeBase Startup+" resizeMode="contain" source={require('../assets/header_logo_light.png')} /> : <Image h="10" w="56" alt="NativeBase Startup+" resizeMode="contain" source={require('../assets/header_logo_dark.png')} />}
          </HStack>
          {props.searchbar && <Input px="4" w="30%" size="sm" placeholder="Search" InputLeftElement={<Icon px="2" size="4" name={'search'} as={FontAwesome} _light={{
          color: 'coolGray.400'
        }} _dark={{
          color: 'coolGray.100'
        }} />} />}

          <HStack space="2" alignItems="center">
            <IconButton variant="ghost" colorScheme="light" icon={<Icon size="6" name="bell" as={FontAwesome} _dark={{
            color: 'coolGray.200'
          }} _light={{
            color: 'coolGray.400'
          }} />} />
            <Menu closeOnSelect={false} w="200" placement="bottom right" onOpen={() => console.log('opened')} onClose={() => console.log('closed')} trigger={triggerProps => {
            return <IconButton {...triggerProps} variant="ghost" colorScheme="light" icon={<Avatar w="8" h="8" _dark={{
              bg: 'coolGray.200'
            }} source={require('../assets/women.jpg')} />} />;
          }} //@ts-ignore
          _dark={{
            bg: 'coolGray.800',
            borderColor: 'coolGray.700'
          }}>
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" _dark={{
              bg: 'coolGray.700'
            }} />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </HStack>
        </HStack>
      </VStack>
    </Box>;
}

function MainContent(props) {
  return <VStack maxW="1016px" flex={1} width="100%">
      {props.displayScreenTitle && <Hidden till="md">
          <HStack mb="4" space={2} alignItems="center">
            <Pressable>
              <Icon size="6" as={AntDesign} name={'arrowleft'} _light={{
            color: 'coolGray.800'
          }} _dark={{
            color: 'coolGray.50'
          }} />
            </Pressable>
            <Text fontSize="lg" _dark={{
          color: 'coolGray.50'
        }} _light={{
          color: 'coolGray.800'
        }}>
              {props.title}
            </Text>
          </HStack>
        </Hidden>}
      {props.children}
    </VStack>;
}

export function MobileHeader(props) {
  return <Box px="1" pt="4" pb="4" _dark={{
    bg: 'coolGray.900',
    borderColor: 'coolGray.800'
  }} _light={{
    bg: {
      base: 'primary.900',
      md: 'white'
    },
    borderColor: 'coolGray.200'
  }}>
      <HStack space="2" justifyContent="space-between">
        <HStack flex="1" space="2" justifyContent="space-between" alignItems="center">
          <>
            <HStack alignItems="center" space="1">
              <VStack ml="4" space="2">
                <Text fontSize="3xl" color="coolGray.50" fontWeight="semibold" letterSpacing="0.2">
                  ExampleRepo
                </Text>
                <Text width="64" fontSize="lg" color="coolGray.50" fontWeight="normal" letterSpacing="0.2">
                  Shifting Power to Borrowers!
                </Text>
              </VStack>
            </HStack>
            <HStack space="1">
              <Menu w="150" trigger={triggerProps => {
              return <IconButton variant="ghost" colorScheme="light" accessibilityLabel="More options menu" {...triggerProps} icon={<Icon size="6" color="coolGray.50" name={'dots-vertical'} as={MaterialCommunityIcons} />} />;
            }} placement="bottom right" //@ts-ignore
            _dark={{
              bg: 'coolGray.800',
              borderColor: 'coolGray.700'
            }}>
                <Menu.Item onPress={() => {props.func("Home")}}>Home</Menu.Item>
                <Menu.Item onPress={() => {props.func("Account")}}>Account</Menu.Item>
                <Menu.Item onPress={() => {props.func("Settings")}}>Settings</Menu.Item>
                <Menu.Item onPress={() => {props.func2()}}>Logout</Menu.Item>
              </Menu>
            </HStack>
          </>
        </HStack>
      </HStack>
    </Box>;
}
export default function DashboardLayout({
  // scrollable = false,
  displayScreenTitle = true,
  displaySidebar = true,
  header = {
    searchbar: false
  },
  mobileHeader = {
    backButton: false
  },
  ...props
}) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

  const authManager = useAuth()

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function logout() {
    authManager.logout(props.navProp);
  }

  function transition(nav) {
    props.navProp.navigate(nav)
  }

  return <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <Box safeAreaTop _light={{
      bg: 'primary.900'
    }} _dark={{
      bg: 'coolGray.900'
    }} />
      <VStack flex={1} _light={{
      bg: 'primary.50'
    }} _dark={{
      bg: 'customGray'
    }}>

          <Hidden from="md">
            <MobileHeader func={transition} func2={logout} title={props.title} backButton={mobileHeader.backButton} />
          </Hidden>
          <Hidden till="md">
            <Header toggleSidebar={toggleSidebar} title={props.title} menuButton={displaySidebar} searchbar={header.searchbar} />
          </Hidden>

          <Box flex={1} flexDirection={{
          base: 'column',
          md: 'row'
        }} _light={{
          borderTopColor: 'coolGray.200'
        }} _dark={{
          bg: 'coolGray.700',
          borderTopColor: 'coolGray.700'
        }}>
            {isSidebarVisible && displaySidebar && <Hidden till="md">
                <Sidebar />
              </Hidden>}

            <Hidden till="md">
              <ScrollView flex={1} p={{
              md: 8
            }} contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1
            }}>
                <MainContent {...props} displayScreenTitle={displayScreenTitle} />
              </ScrollView>
            </Hidden>

            <Hidden from="md">
              <MainContent {...props} displayScreenTitle={displayScreenTitle} />
            </Hidden>
          </Box>
      </VStack>
    </>;
}