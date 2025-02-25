import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import IsListEmpty from './components/IsListEmpty';
import MyFlashList from './components/MyFlashList';
import AddIcon from '../../assets/svg/add.svg'
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const checkList = useAppSelector((state:RootState) => state.selectList);
  const onHandleClick = () => navigation.navigate('CreateCardScreen');
  console.log(typeof checkList);
  return (
    <View style={styles.main} >
        <Header title={'Virtual Business Cart Creator'} />
        {
          checkList && checkList.myList.length == 0 
          ?
            <IsListEmpty/>
          :
          <MyFlashList data={checkList.myList} />
        }
        <TouchableOpacity style={styles.btn} onPress={onHandleClick} >
          <AddIcon width={35} height={35} />
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main:{
    height: '100%',
    backgroundColor:'white',
  },
  btn:{
    display:'flex',
    position:'absolute',
    bottom: 100,
    right: 20,
    borderColor:'#ced4da',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
});