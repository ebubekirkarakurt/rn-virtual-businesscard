import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../navigation/useAppNavigation';

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useAppNavigation();
  //   const dispatch = useAppDispatch();
  //   const checkList = useAppSelector((state:RootState) => state.selectList);
  //   const myString = "myString";
  // dispatch(addItem(myString))
  const onHandleClick = () => navigation.navigate('CreateCartScreen');
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go Next page" onPress={onHandleClick}></Button>
    </View>
  );
};

export default HomeScreen;
