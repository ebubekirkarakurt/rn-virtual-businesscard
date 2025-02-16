import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GetUserInfo from './components/GetUserInfo';

type Props = {};

const CreateCartScreen = (props: Props) => {
  return (
    <View>
      <GetUserInfo/>
    </View>
  );
};

export default CreateCartScreen;

const styles = StyleSheet.create({});
