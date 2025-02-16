import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import { addItem } from '../../../redux/reducer/selectList';
import { RootState } from '../../../redux/store/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import UserIcon from '../../../assets/svg/userIcon.svg';

const GetUserInfo = () => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');
  const [instagram, setInstagram] = useState('');
  const [website, setWebsite] = useState('');

  const dispatch = useAppDispatch();
  const userCount = useAppSelector((state: RootState) => state.selectList.userCount);
  
  const onHandlePress = () => {
    dispatch(
      addItem({
        name,
        surName,
        phoneNumber,
        mail,
        address,
        instagram,
        website,
      })
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
       <View style={styles.iconContainer}>
            <UserIcon width={100} height={100} />
       </View>
        
        <View style={styles.topInputContainer}>
          <CustomTextInput title={'Name'} value={name} onChangeText={setName} style={styles.input} />
          <CustomTextInput title={'Surname'} value={surName} onChangeText={setSurName} style={styles.input} />
        </View>
      </View>

      <CustomTextInput title={'Phone Number'} value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
      <CustomTextInput title={'Mail Address'} value={mail} onChangeText={setMail} style={styles.input} />
      <CustomTextInput title={'Address'} value={address} onChangeText={setAddress} style={styles.input} />
      <CustomTextInput title={'Instagram Address'} value={instagram} onChangeText={setInstagram} style={styles.input} />
      <CustomTextInput title={'Website Address'} value={website} onChangeText={setWebsite} style={styles.input} />

     <View style={{alignItems:'center'}} >
        <TouchableOpacity style={styles.button} onPress={onHandlePress} >
            <Text style={styles.btnTxt} >{`Save and Create (Template ${userCount + 1})`}</Text>  
        </TouchableOpacity>  
     </View>
    </View>
  );
};

export default GetUserInfo;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    height:'97%',
    marginTop: 20,
  },
  topContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topInputContainer: { width: '70%' },
  input: { marginBottom: 10 },
  button:{
    backgroundColor:'#55828b',
    borderRadius: 10,
    bottom: 0,
    display:'flex',
    top: 120,
    padding: 6,
    alignItems:'center',
    width:'70%',
  },
  btnTxt:{
    color:'white',
    fontSize: 17,
    padding: 5,
  },
  iconContainer: {marginHorizontal: 10},
});
