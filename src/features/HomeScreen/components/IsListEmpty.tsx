import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IsListEmpty = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>
        There is no template to display, please try creating a new one..
      </Text>
    </View>
  );
};

export default IsListEmpty;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    borderColor: '#ced4da',
    borderWidth: 2.7,
    borderRadius: 10,
    padding: 30,
    top: '30%',
  },
  txt: {
    fontSize: 19,
    fontWeight: '500',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
