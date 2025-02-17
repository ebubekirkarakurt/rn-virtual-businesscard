import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { UserType } from '../../user.type';

type Props = {
    data: UserType[]
}

const MyFlashList = ({data}: Props) => {
  console.log('data: ', data)
  return (
    <View style={styles.main} >
      <FlashList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.list} >
              <Text style={styles.txt}>{item.name}</Text>
              <Text style={styles.txt}>{item.name}</Text>
            </View>
          );
        }}
        estimatedItemSize={50}
      />
    </View>
  )
}

export default MyFlashList;

const styles = StyleSheet.create({
  main:{
    height:'100%',
  },
  list: {
    margin: 10,
    padding: 10,
  },
  txt: {
    fontSize:20
  },
})