import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
};

const CustomTextInput = ({title, value, onChangeText, style}: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    alignSelf: 'flex-start',
    color: '#212529',
    marginBottom: 3,
    paddingStart: 7,
  },
  input: {
    backgroundColor: '#e5e5e5',
    margin: 7,
    padding: 10,
    borderRadius: 10,
  },
});

