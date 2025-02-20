import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomIconProps = {
  name: string;
  size: number;
  color: string;
};

const CustomIcon = ({ name, size, color }: CustomIconProps) => {
  return (
    <View>
      <Icon name={name} size={size} color={color}></Icon>
    </View>
  );
};

export default CustomIcon;