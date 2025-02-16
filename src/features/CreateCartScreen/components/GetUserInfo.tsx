import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../components/CustomTextInput';

type Props = {}

const GetUserInfo = (props: Props) => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');
  console.log("name: ", name)
  return (
    <View style={styles.main} >
      <View style={styles.topContainer} >
        <Text style={{flex: 5, margin: 20}} >Foto</Text>
        <View style={styles.topInputContainer}>
            <CustomTextInput
                title={'Name'}
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <CustomTextInput
                title={'Sur Name'}
                value={surName}
                onChangeText={setSurName}
                style={styles.input}
            />
        </View>
       </View>
       <CustomTextInput
                title={'Phone Number'}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={styles.input}
        />
        <CustomTextInput
                title={'Mail Address'}
                value={mail}
                onChangeText={setMail}
                style={styles.input}
        />
        <CustomTextInput
                title={'Address'}
                value={address}
                onChangeText={setAddress}
                style={styles.input}
        />
    </View>
  )
}

export default GetUserInfo;

const styles = StyleSheet.create({
    main:{},
    topContainer:{
        margin: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
    },
    topInputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor: 'pink',
        margin: 10,
        padding: 2,
        borderRadius: 10,
    },
})