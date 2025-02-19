import { Image, StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.main}>
      <View style={styles.topContainer} >
        <Image source={{ uri: `file://${item.selectedImage}` }} style={styles.image} />
      </View>
      <View style={styles.nameContainer} >
        <Text style={styles.txt} >{item.name} {item.surName}</Text>
        <Text style={styles.departmentTxt} >{item.departman}</Text>
        <Text style={styles.descriptionTxt} >{item.description}</Text>
      </View>
    </View>
  )
}

export default CardDetailScreen

const styles = StyleSheet.create({
    main: {
        height: '100%',
        width: '100%',
        backgroundColor:'white',
    },
    topContainer: {
        height: '12%',
        backgroundColor: '#2a9d8f',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        resizeMode: 'cover',
        marginRight: 20,
        top: 30,
        left: 120,
    },
    txt:{
        textAlign:'center',
        fontSize: 24,
        color:'#003049',
        fontWeight: '500',
    },
    departmentTxt:{
        textAlign:'center',
        fontSize: 18,
        color:'#415a77',
        fontWeight: '500',
    },
    nameContainer:{ top: 100 },
    descriptionTxt: {
        textAlign:'center',
        fontSize: 18,
        color:'#778da9',
        fontWeight: '500',
        paddingTop: 20,
    },
});