import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../features/HomeScreen/HomeScreen';
import CreateCardScreen from '../features/CreateCartScreen/CreateCardScreen';
import CardDetailScreen from '../features/CardDetailScreen/CardDetailScreen';
import { UserType } from '../features/user.type';

export type RootStackParamsList = {
  HomeScreen: undefined;
  CreateCardScreen: undefined;
  CardDetailScreen: {
    item: UserType
  };
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = {headerShown: false};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="HomeScreen">
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}></RootStack.Screen>
      <RootStack.Screen
        name="CreateCardScreen"
        component={CreateCardScreen}
        options={{headerShown: true, headerTitle: 'Enter Your Informations'}}
      />
      <RootStack.Screen
        name="CardDetailScreen"
        component={CardDetailScreen}
        options={{headerShown: true, headerTitle: 'Card Detail'}}
      />
    </RootStack.Navigator>
  );
};
