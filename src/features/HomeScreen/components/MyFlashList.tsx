import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { UserType } from '../../user.type';
import { useAppNavigation } from '../../../navigation/useAppNavigation';

type Props = {
    data: UserType[]
}

const MyFlashList = ({data}: Props) => {
  const navigation = useAppNavigation();

  const onPress = (item: UserType) => navigation.navigate("CardDetailScreen", {item: item});

  return (
    <View style={styles.main} >
      <FlashList
        data={data}
        renderItem={({ item }) => {
          return (
           <TouchableOpacity onPress={() => onPress(item)} >
              <View style={styles.list} >
                <Image source={{ uri: `file://${item.selectedImage}` }} style={styles.image} />
              <>
                  <Text style={styles.txt}>{item.name} {item.surName}</Text>
                  <Text style={styles.txt}>{}</Text>
              </>
              </View>
           </TouchableOpacity>
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
    flexDirection:'row',
    borderColor:'#ced4da',
    borderWidth: 2,
    borderRadius: 10,
    alignItems:'center',
  },
  txt: {
    fontSize:20,
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 20
  },
})