import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamsList} from '../../navigation/navigation';
import Label from './components/Label';
import ConnectMe from './components/ConnectMe';
import QRCode from 'react-native-qrcode-svg';
import UserIcon from '../../assets/svg/userIcon.svg';

type DetailRouteProp = RouteProp<RootStackParamsList, 'CardDetailScreen'>;

type Props = {
  route: DetailRouteProp;
};

const CardDetailScreen = ({route}: Props) => {
  const item = route.params.item;
  console.log(item.selectedImage);
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL couldnt open:', err));
  };

  const makeCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(err =>
      Alert.alert('Error', 'Cannot make a call'),
    );
  };

  const sendEmail = (email: string) => {
    Linking.openURL(`mailto:${email}?`).catch(err =>
      Alert.alert('Error', 'E-mail cannot send'),
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        {item.selectedImage === '' ? (
          <UserIcon width={150} height={150} style={styles.image} />
        ) : (
          item.selectedImage && (
            <Image
              source={{uri: `file://${item.selectedImage}`}}
              style={styles.image}
            />
          )
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.txt}>
          {item.name} {item.surName}
        </Text>
        <Text style={styles.departmentTxt}>{item.departman}</Text>
        <Text style={styles.descriptionTxt}>{item.description}</Text>
      </View>
      <View style={styles.label}>
        <Label
          iconName={'phone'}
          onPress={() => makeCall(item.phoneNumber)}
          txt={item.phoneNumber}
        />
        <Label
          iconName={'email-box'}
          onPress={() => sendEmail(item.mail)}
          txt={item.mail}
        />
        <Label
          iconName={'earth'}
          onPress={() => openLink(item.website)}
          txt={item.website}
        />
      </View>
      <View style={styles.qrContainer}>
        <QRCode value={item.website} size={200} />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.descriptionTxt}>Connect with me on</Text>
        <View style={styles.row}>
          <ConnectMe
            iconName={'instagram'}
            onPress={() => openLink(item.instagram)}
          />
          <ConnectMe
            iconName={'linkedin'}
            onPress={() => openLink(item.linkedin)}
          />
        </View>
      </View>
    </View>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topContainer: {
    height: '12%',
    backgroundColor: '#84a98c',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    marginRight: 20,
    top: 30,
    left: 120,
    borderColor: '#84a98c',
    borderWidth: 1.5,
    backgroundColor: 'white',
  },
  txt: {
    textAlign: 'center',
    fontSize: 24,
    color: '#003049',
    fontWeight: '500',
  },

  departmentTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#415a77',
    fontWeight: '500',
  },
  nameContainer: {top: 40},
  descriptionTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#778da9',
    fontWeight: '500',
    paddingTop: 10,
    paddingStart: 10,
    paddingEnd: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    top: 0,
  },
  label: {
    top: 20,
  },
});
