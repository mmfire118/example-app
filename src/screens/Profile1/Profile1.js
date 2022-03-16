import React, { useState, useEffect, useRef } from 'react';
import { Box, Pressable, Hidden, HStack, CheckIcon, Select, Modal, FormControl, Menu, Text, VStack, Avatar, useColorModeValue, useBreakpointValue, useColorMode, Button, Link, TextArea, Input, IconButton, Icon, Center, Checkbox } from 'native-base';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import GuestLayout from '../../layouts/GuestLayout2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Platform } from 'react-native';
import DatePicker from 'react-native-date-picker'

export default function EditAccount(props) {
    const { navigation, route } = props

    const schema = yup.object({
        Title: yup.string().required('This field is required'),
        FirstName: yup.string().required('This field is required'),
        LastName: yup.string().required('This field is required'),
        OtherSelect: yup.string().required('This field is required'),
        OtherSelect2: yup.string().required('This field is required'),
        OtherSelect3: yup.string().required('This field is required'),
        OtherInput: yup.string().required('This field is required'),
        OtherInput2: yup.string().required('This field is required'),
        OtherInput3: yup.string().required('This field is required'),
        DateOfBirth: yup.string().required('This field is required'),
        AddressDate: yup.string().required('This field is required'),
        /* DateOfBirth: yup.date('You must select a date').default(function () {
            return new Date();
          }), */
        PostCode: yup.string().required('This field is required'),
    }).required();

    const { control, setValue, watch, formState:{ errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        navigation.navigate('DeactivateAccount')
    };

  const bgColor = useBreakpointValue({
    base: '#1f2937',
    lg: '#111827',
    md: '#111827',
    xl: '#111827'
  });

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  onFocus = () => {
    setOpen(true)
  }

  const [date2, setDate2] = useState(new Date())
  const [open2, setOpen2] = useState(false)

  onFocus2 = () => {
    setOpen2(true)
  }

  return <GuestLayout>
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
                <Menu.Item onPress={() => {navigation.navigate("DeactivateAccount")}}>DeactivateAccount</Menu.Item>
                <Menu.Item onPress={() => {navigation.navigate("DeactivateAccount2")}}>DeactivateAccount2</Menu.Item>
                <Menu.Item onPress={() => {navigation.navigate("DeactivateAccount5")}}>DeactivateAccount5</Menu.Item>
              </Menu>
            </HStack>
            </HStack>
            </HStack>
          <VStack space="2">
            <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
              Profile
            </Text>
            <Text
              fontSize="md"
              fontWeight="normal"
              _dark={{
                color: 'coolGray.400',
              }}
              _light={{
                color: 'primary.300',
              }}
            >
              Tell us about yourself
            </Text>
          </VStack>
        </VStack>
        <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
        <VStack
        flex="1"
        px="6"
        py="0"
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: 'coolGray.800' }}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{ base: '2xl', md: 'xl' }}
        borderBottomRightRadius={{ base: '0', md: 'xl' }}
        borderTopLeftRadius={{ base: '2xl', md: '0' }}
      >
      <VStack px={{
      base: 4,
      md: 8,
      lg: 32
    }} py={{
      base: 8,
      md: 8
    }} borderRadius={{
      md: '8'
    }} _light={{
      borderColor: 'coolGray.200',
      bg: {
        base: 'coolGray.50'
      }
    }} _dark={{
      borderColor: 'coolGray.800',
      bg: {
        md: 'coolGray.900',
        base: 'coolGray.800'
      }
    }} borderWidth={{
      md: '1'
    }} borderBottomWidth="0" space="4">

        <FormControl isInvalid={'Title' in errors}>
            <FormControl.Label>Title</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                    py="3"
                  placeholder="Choose One"
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    bg: 'primary.600',
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                  <Select.Item label="Mr" value="Mr" />
                  <Select.Item label="Mrs" value="Mrs" />
                  <Select.Item label="Miss" value="Miss" />
                  <Select.Item label="Ms" value="Ms" />
                  <Select.Item label="Other" value="Other" />
                </Select>
              )}
              name="Title"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.Title?.message}
            </FormControl.ErrorMessage>
          </FormControl>    

          <FormControl isInvalid={'FirstName' in errors}>
            <FormControl.Label>First Name</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="First Name"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="FirstName"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.FirstName?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'LastName' in errors}>
            <FormControl.Label>Last Name</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="Last Name"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="LastName"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.LastName?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'OtherSelect' in errors}>
            <FormControl.Label>OtherSelect</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                    py="3"
                  placeholder="Choose One"
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    bg: 'primary.600',
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                  <Select.Item label="One" value="One" />
                  <Select.Item label="Two" value="Two" />
                </Select>
              )}
              name="OtherSelect"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.OtherSelect?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={'OtherSelect2' in errors}>
            <FormControl.Label>OtherSelect2</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                    py="3"
                  placeholder="Choose One"
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    bg: 'primary.600',
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                  <Select.Item label="One" value="One" />
                  <Select.Item label="Two" value="Two" />
                </Select>
              )}
              name="OtherSelect2"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.OtherSelect2?.message}
            </FormControl.ErrorMessage>
          </FormControl>

            <FormControl isInvalid={'OtherInput' in errors}>
            <FormControl.Label>OtherInput</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="OtherInput"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="OtherInput"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.OtherInput?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'OtherSelect3' in errors}>
            <FormControl.Label>OtherSelect3</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                    py="3"
                  placeholder="Choose One"
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    bg: 'primary.600',
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                  <Select.Item label="One" value="One" />
                  <Select.Item label="Two" value="Two" />
                </Select>
              )}
              name="OtherSelect3"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.OtherSelect3?.message}
            </FormControl.ErrorMessage>
          </FormControl>

            <FormControl isInvalid={'OtherInput2' in errors}>
            <FormControl.Label>OtherInput2</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="OtherInput2"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="OtherInput2"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.OtherInput2?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'OtherInput3' in errors}>
            <FormControl.Label>OtherInput3</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="OtherInput3"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="OtherInput3"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.OtherInput3?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            {/* TODO SET MIN AND MAX DAT WITH MOMENT */}
            <FormControl isInvalid={'DateOfBirth' in errors}>
            <FormControl.Label>Date of Birth</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (

                        <VStack>
                        <Input
                            onFocus={onFocus}
                            py="3"
                            isDisabled={open ? true : false}
                            placeholder="Last Name"
                            borderRadius="4"
                            value={date.toDateString()}
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
                        <DatePicker
                            modal
                            title="Select Your Date of Birth"
                            textColor={useColorModeValue("#111827", "#f9fafb")}
                            mode="date"
                            defaultValue={value}
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            onChange(date)
                            }}
                            onCancel={() => {
                            setOpen(false)
                            }}
                        />
                        </VStack>
                )}
                name="DateOfBirth"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.DateOfBirth?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'PostCode' in errors}>
            <FormControl.Label>Current Post Code</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                    py="3"
                    isRequired
                    placeholder="Current Post Code"
                    borderRadius="4"
                    defaultValue={value}
                    onChangeText={itemValue => {
                    onChange(itemValue)
                    }}
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
                name="PostCode"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.PostCode?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'Address' in errors}>
            <FormControl.Label>Address</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                    py="3"
                  placeholder="Enter Post Code Above"
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    bg: 'primary.600',
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                </Select>
              )}
              name="Address"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.Title?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          {/* TODO SET MIN AND MAX DAT WITH MOMENT */}
          <FormControl isInvalid={'AddressDate' in errors}>
            <FormControl.Label>When did you move in?</FormControl.Label>
                <Controller
                control={control}
                render={({ field: { onChange, value } }) => (

                        <VStack>
                        <Input
                            onFocus={onFocus2}
                            py="3"
                            isDisabled={open2 ? true : false}
                            placeholder=""
                            borderRadius="4"
                            value={date2.toDateString()}
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
                        <DatePicker
                            modal
                            title="When did you move in?"
                            textColor={useColorModeValue("#111827", "#f9fafb")}
                            mode="date"
                            defaultValue={value}
                            open={open2}
                            date={date2}
                            onConfirm={(date) => {
                            setOpen2(false)
                            setDate2(date)
                            onChange(date)
                            }}
                            onCancel={() => {
                            setOpen2(false)
                            }}
                        />
                        </VStack>
                )}
                name="AddressDate"
                defaultValue=""
                />
                <FormControl.ErrorMessage>
                {errors.AddressDate?.message}
                </FormControl.ErrorMessage>
            </FormControl>

          <Text mt="0" mb="2" fontSize="sm" fontWeight="medium" _light={{
                color: 'coolGray.800'
                }} _dark={{
                color: 'coolGray.50'
                }}>
                  Keep up with us!
                </Text>
                <Text mt="0" mb="0" fontSize="sm" fontWeight="medium" _light={{
                color: 'coolGray.800'
                }} _dark={{
                color: 'coolGray.50'
                }}>
                    I would like to receive offers, notifications, and reminders to help me learn about new features on this app through:
            </Text>

            <FormControl isRequired isInvalid={'Email' in errors}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                <Checkbox
                    my="0"
                    _dark={{
                    // @ts-ignore
                    _checked: { bg: 'primary.800', borderColor: 'primary.700' },
                    }}
                    _light={{
                    // @ts-ignore
                    _checked: { bg: 'primary.900' },
                    }}
                    value="Email"
                    defaultValue={value}
                    onChange={itemValue => {
                    onChange(itemValue  || "")
                    }}
                    accessibilityLabel="Remember me"
                >
                <HStack alignItems="center">
                <Text
                    fontSize="sm"
                    color="coolGray.800"
                    _dark={{ color: 'coolGray.400' }}
                    pl="2"
                >
                    Email
                </Text>
                </HStack>
            </Checkbox>
                  )}
                  name="Email"
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.Email?.message}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={'SMS' in errors}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                <Checkbox
                    my="0"
                    _dark={{
                    // @ts-ignore
                    _checked: { bg: 'primary.800', borderColor: 'primary.700' },
                    }}
                    _light={{
                    // @ts-ignore
                    _checked: { bg: 'primary.900' },
                    }}
                    value="SMS"
                    defaultValue={value}
                    onChange={itemValue => {
                    onChange(itemValue  || "")
                    }}
                    accessibilityLabel="Remember me"
                >
                <HStack alignItems="center">
                <Text
                    fontSize="sm"
                    color="coolGray.800"
                    _dark={{ color: 'coolGray.400' }}
                    pl="2"
                >
                    SMS
                </Text>
                </HStack>
            </Checkbox>
                  )}
                  name="SMS"
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.SMS?.message}
                </FormControl.ErrorMessage>
              </FormControl>

        <Button mt={{
        base: '70'
      }} onPress={handleSubmit(onSubmit)} size="md" borderRadius="4" _text={{
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
          SUBMIT
        </Button>
      </VStack>
      </VStack>
      </KeyboardAwareScrollView>
    </GuestLayout>;
}