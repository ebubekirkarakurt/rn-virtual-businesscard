import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  title: string,
};

const Header = ({title}: Props) => {
  return (
    <View style={styles.main} >
      <Text style={styles.txt} >{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main:{
    borderWidth: 2,
    borderTopColor:'none',
    borderRightColor:'none',
    borderLeftColor:'none',
    borderBottomColor:'#ced4da',
    padding: 10,
  },
  txt:{
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 10,
  },
});
