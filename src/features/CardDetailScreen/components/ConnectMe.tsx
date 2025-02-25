import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from '../../components/CustomIcon';

type Props = {
  iconName: string;
  onPress: () => void;
};

const ConnectMe = ({iconName, onPress}: Props) => {
  return (
    <View style={styles.contactContainer}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <CustomIcon name={iconName} size={32} color={'#386641'} />
      </TouchableOpacity>
    </View>
  );
};

export default ConnectMe;

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#778da9',
    fontWeight: '500',
    paddingTop: 20,
  },
  btn: {
    paddingEnd: 5,
    paddingStart: 5,
  },
});
