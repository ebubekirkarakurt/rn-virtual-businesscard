import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import { addItem } from '../../../redux/reducer/selectList';
import { RootState } from '../../../redux/store/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import UserIcon from '../../../assets/svg/userIcon.svg';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppNavigation } from '../../../navigation/useAppNavigation';

const GetUserInfo = () => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mail, setMail] = useState('');
  const [departman, setDepartman] = useState('');
  const [description, setDescription] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const userCount = useAppSelector((state: RootState) => state.selectList.userCount);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Kullanıcı seçimi iptal etti');
      } else if (response.errorMessage) {
        console.log('Hata:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const onHandlePress = () => {
    dispatch(
      addItem({
        name,
        surName,
        phoneNumber,
        mail,
        departman,
        description,
        instagram,
        linkedin,
        website,
        selectedImage,
      })
    );
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
      <TouchableOpacity onPress={selectImage} style={styles.iconContainer}>
            {selectedImage === '' ? (
                <UserIcon width={100} height={100} />
            ) : (
                selectedImage && <Image source={{ uri: `file://${selectedImage}` }} style={styles.image} />
            )}
      </TouchableOpacity>
        <View style={styles.topInputContainer}>
          <CustomTextInput title={'Name'} value={name} onChangeText={setName} style={styles.input} />
          <CustomTextInput title={'Surname'} value={surName} onChangeText={setSurName} style={styles.input} />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.centeredFlex}>
          <CustomTextInput title={'Phone Number'} value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
        </View>
        <View style={styles.centeredFlex}>
          <CustomTextInput title={'Mail Address'} value={mail} onChangeText={setMail} style={styles.input} />
        </View>
      </View>

      <CustomTextInput title={'Description'} value={description} onChangeText={setDescription} style={styles.input} />
      <CustomTextInput title={'Departman'} value={departman} onChangeText={setDepartman} style={styles.input} />

      <View style={styles.rowContainer}>
        <View style={styles.centeredFlex} >
          <CustomTextInput title={'Instagram'} value={instagram} onChangeText={setInstagram} style={styles.input}/>
        </View>
        <View style={styles.centeredFlex}>
          <CustomTextInput title={'Linkedin'} value={linkedin} onChangeText={setLinkedin} style={styles.input} />
        </View>
      </View>


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
  input: { marginBottom: 10, width:'96%',},
  rowContainer:{flexDirection: 'row', width: '100%', gap: 10},
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
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  centeredFlex:{
    flex:0.5,
  },
});
