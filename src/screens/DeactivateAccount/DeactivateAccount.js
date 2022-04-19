import React from 'react';
import { Box, Pressable, Hidden, HStack, Modal, FormControl, Menu, Text, VStack, Avatar, useColorModeValue, useBreakpointValue, useColorMode, Button, Link, TextArea, IconButton, Icon, Center } from 'native-base';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import GuestLayout from '../../layouts/GuestLayout2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function (props) {
    const { navigation, route } = props

  const {
    colorMode
  } = useColorMode();

  const [modalVisible, setModalVisible] = React.useState(false);

  const closeModal = () => {
    setModalVisible(false)
  }

  const logout = () => {
    setModalVisible(false)
    navigation.navigate('Profile')
  }

  const [showPass, setShowPass] = React.useState(false);

  const bgColor = useBreakpointValue({
    base: '#1f2937',
    lg: '#111827',
    md: '#111827',
    xl: '#111827'
  });

    const schema = yup.object({
        Reason: yup.string().required('This field is required'),
        Password: yup.string().required('This field is required').matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/,
        "Password Must Contain 10 Characters, One Uppercase Letter, One Lowercase Letter, One Number and One Special Character (#?!@$%^&*-)"
        ),
    }).required();

    const { control, setValue, watch, formState:{ errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
    // console.log(schema.fields["cards"])

    setModalVisible(true)
    };
  return <>
      <GuestLayout title="Disable Account">
        <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack px="4" mt="4" mb="5" space="9">
        <HStack space="2" justifyContent="space-between">
        <HStack flex="1" space="2" justifyContent="space-between" alignItems="center">
          <HStack space="2" alignItems="center">
            <Pressable
              onPress={() => navigation.goBack()}
            >
              <HStack space="2" alignItems="center">
                <Icon
                  size="6"
                  as={AntDesign}
                  name="arrowleft"
                  color="coolGray.50"
                />
                <Text color="coolGray.50" fontSize="lg">
                  Back
                </Text>
              </HStack>
            </Pressable>
          </HStack>
          <HStack space="1">
              <Menu w="150" trigger={triggerProps => {
              return <IconButton variant="ghost" colorScheme="light" accessibilityLabel="More options menu" {...triggerProps} icon={<Icon size="6" color="coolGray.50" name={'dots-vertical'} as={MaterialCommunityIcons} />} />;
            }} placement="bottom right" //@ts-ignore
            _dark={{
              bg: 'coolGray.800',
              borderColor: 'coolGray.700'
            }}>
                <Menu.Item onPress={() => {navigation.navigate("Profile")}}>Profile</Menu.Item>
                <Menu.Item onPress={() => {navigation.navigate("DeactivateAccount7")}}>DeactivateAccount7</Menu.Item>
                <Menu.Item onPress={() => {navigation.navigate("DeactivateAccount9")}}>DeactivateAccount9</Menu.Item>
              </Menu>
            </HStack>
            </HStack>
            </HStack>
          <VStack space="2">
            <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
              Deactivate Account
            </Text>
          </VStack>
        </VStack>
        <VStack px={{
      base: 4,
      md: 8,
      lg: 32
    }} py={{
      base: 16,
      md: 8
    }} borderRadius={{
      md: '8'
    }} _light={{
      borderColor: 'coolGray.200',
      bg: {
        base: 'white'
      }
    }} _dark={{
      borderColor: 'coolGray.800',
      bg: {
        md: 'coolGray.900',
        base: 'coolGray.800'
      }
    }} borderWidth={{
      md: '1'
    }} borderBottomWidth="1" space="4">
          <VStack space="4" mt="0">
            <Text fontSize="md" fontWeight="bold" _light={{
            color: 'coolGray.800'
          }} _dark={{
            color: 'coolGray.50'
          }}>
              Why are you closing your account?
            </Text>
            <FormControl isRequired isInvalid={'Reason' in errors}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextArea onChangeText={(val) => onChange(val)}
                    defaultValue={value} placeholder="Please enter the reason for closing your account." h="40" fontSize="sm" width="100%" _light={{
                        borderColor: 'coolGray.300'
                    }} _dark={{
                        borderColor: 'coolGray.500'
                    }} />
                  )}
                  name="Reason"
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.Reason?.message}
                </FormControl.ErrorMessage>
              </FormControl>
          </VStack>
          <Box mt="8">
            <Text mb="4" fontSize="md" fontWeight="bold" _light={{
            color: 'coolGray.800'
          }} _dark={{
            color: 'coolGray.50'
          }}>
              To continue, please re-enter your password
            </Text>
            <FormControl isRequired isInvalid={'Password' in errors}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FloatingLabelInput
                    py="3"
                    isRequired
                    type={showPass ? '' : 'password'}
                    label="Password"
                    borderRadius="4"
                    // ="coolGray.400"
                    labelColor="#9ca3af"
                    // ('white', 'coolGray.800')
                    labelBGColor={useColorModeValue('#fff', '#1f2937')}
                    defaultValue={value}
                    onChangeText={itemValue => {
                      onChange(itemValue)
                    }}
                    InputRightElement={
                      <IconButton
                        mr="1"
                        variant="unstyled"
                        icon={
                          <Icon
                            size="4"
                            color="coolGray.400"
                            as={Entypo}
                            name={showPass ? 'eye' : 'eye-with-line'}
                          />
                        }
                        onPress={() => {
                          setShowPass(!showPass);
                        }}
                      />
                    }
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'medium',
                    }}
                    _dark={{
                      borderColor: 'coolGray.700',
                    }}
                    _light={{
                      borderColor: 'coolGray.300',
                    }}
                  />
                  )}
                  name="Password"
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.Password?.message}
                </FormControl.ErrorMessage>
              </FormControl>
          </Box>
          <Text mt="5" mb="2" fontSize="sm" fontWeight="medium" _light={{
          color: 'coolGray.800'
        }} _dark={{
          color: 'coolGray.50'
        }}>
            Are you really sure you want to close your account?
            
            You will lose this account permanently, and if you want to use our service again in the future, you will have to enter your information again.
          </Text>
          <HStack space="2" w="100%" justifyContent="center">
              <Button onPress={handleSubmit(onSubmit)} flex={1} mt="4" size="md" borderRadius="4" _text={{
          fontSize: 'sm',
          fontWeight: 'medium'
        }} _light={{
          bg: 'primary.900'
        }} _dark={{
          bg: 'primary.700',
          _pressed: {
            bg: 'primary.500'
          }
        }}>
            CONFIRM
          </Button>
          </HStack>
        </VStack>
        </KeyboardAwareScrollView>
      </GuestLayout>
      <Modal isOpen={modalVisible} onClose={closeModal} size={"xs"}>
        <Modal.Content _light={{
        bg: 'white'
      }} _dark={{
        bg: 'coolGray.700'
      }}>
          <Modal.Body>
            <VStack space="4" justifyContent="center" alignItems="center" px="2" py="2">
              <Hidden from="base" till="md">
                <Modal.CloseButton />
              </Hidden>
              <Icon as={AntDesign} name="questioncircleo" 
                color='danger.600'
                size="12" />
              <Text textAlign="center">
                Are you sure you want to close this account?
              </Text>
              <HStack space="2" w="100%" justifyContent="center">
              <Button onPress={() => logout()} flex={1} size="sm" borderRadius="4" variant="outline" borderColor="coolGray.400" _text={{
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'coolGray.400'
              }}>
                  YES
              </Button>
              <Button onPress={() => closeModal()} flex={1} size="sm" borderRadius="4" _text={{
                fontSize: 'sm',
                fontWeight: 'medium'
              }} _light={{
                bg: 'primary.900'
              }} _dark={{
                bg: 'primary.700',
                _pressed: {
                  bg: 'primary.500'
                }
              }}>
                  NO
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>;
}