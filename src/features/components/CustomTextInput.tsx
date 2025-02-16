import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

type Props = {
  title: string
  value: string,
  onChangeText: (text: string) => void,
  style?: StyleProp<TextInput>,
}

const CustomTextInput = ({title, value, onChangeText, style}: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title} >{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[style, styles.input]}
      />
    </View>
  )
}

export default CustomTextInput;

const styles = StyleSheet.create({
  main:{
    alignItems:'center',
  },
  title:{
    fontSize: 17,
    display:'flex',
    left: 0,
    width:'94%',
    color:'#212529'
  },
  input:{
    width:'94%',
    backgroundColor: '#e5e5e5',
    margin: 10,
    padding: 2,
    borderRadius: 10,
  }
})