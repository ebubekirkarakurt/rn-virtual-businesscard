import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import IsListEmpty from './components/IsListEmpty';
import MyFlashList from './components/MyFlashList';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const checkList = useAppSelector((state:RootState) => state.selectList);
  const onHandleClick = () => navigation.navigate('CreateCartScreen');
  console.log(typeof checkList);
  return (
    <View style={styles.main} >
        <Text>HomeScreen</Text>
        {
          checkList && checkList.myList.length == 0 
          ?
            <IsListEmpty/>
          :
          <MyFlashList data={checkList.myList} />
        }
        <TouchableOpacity style={styles.btn} onPress={onHandleClick} >
          <Text>Go Next page</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main:{
    margin: 10,
    height: '100%'
  },
  btn:{
    display:'flex',
    position:'absolute',
    bottom: 100,
    right: 10,
    backgroundColor:'red',
  },
});