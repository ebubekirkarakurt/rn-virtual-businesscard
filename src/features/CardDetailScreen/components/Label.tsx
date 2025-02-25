import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from '../../components/CustomIcon';

type Props = {
  iconName: string;
  onPress: () => void;
  txt: string;
};

const Label = ({iconName, onPress, txt}: Props) => {
  return (
    <View style={styles.label}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <CustomIcon name={iconName} size={22} color={'#386641'} />
          <Text style={styles.labelTxt}>{txt}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    width: '100%',
    marginStart: 20,
    marginEnd: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  labelTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#415a77',
    paddingStart: 5,
  },
});
