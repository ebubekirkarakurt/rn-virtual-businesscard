import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../../navigation/navigation';

type DetailRouteProp = RouteProp<RootStackParamsList, 'CardDetailScreen'>;

type Props = {
    route: DetailRouteProp
}

const CardDetailScreen = ({route}: Props) => {
    const item = route.params.item;

  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default CardDetailScreen

const styles = StyleSheet.create({})