import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlashList } from "@shopify/flash-list";
import { UserType } from '../../user.type';

type Props = {
    data: UserType[]
}

const MyFlashList = ({data}: Props) => {
  return (
    <View>
      <FlashList
        data={data}
        renderItem={({item}) => {
          <>
            <Text>{item.image}</Text>
          </>
        }}
      />
    </View>
  )
}

export default MyFlashList;

const styles = StyleSheet.create({})