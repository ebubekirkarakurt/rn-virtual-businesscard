import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppNavigation } from '../navigation/useAppNavigation'

type Props = {}

const HomeScreen = (props: Props) => {
  const navigation = useAppNavigation()
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go Next page' onPress={()=> navigation.navigate('CreateCartScreen')}></Button>
    </View>
  )
}

export default HomeScreen;