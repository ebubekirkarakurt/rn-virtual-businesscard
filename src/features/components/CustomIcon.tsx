import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomIconProps = {
  name: string;
  size: number;
  color: string;
};

const CustomIcon = ({name, size, color}: CustomIconProps) => {
  return (
    <View style={styles.main}>
      <Icon name={name} size={size} color={color}></Icon>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  main: {
    padding: 5,
    backgroundColor: '#84a98c',
    borderRadius: 100,
  },
});
