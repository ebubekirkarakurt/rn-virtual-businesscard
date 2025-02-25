import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GetUserInfo from './components/GetUserInfo';

type Props = {};

const CreateCardScreen = (props: Props) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <GetUserInfo />
    </View>
  );
};

export default CreateCardScreen;

const styles = StyleSheet.create({});
