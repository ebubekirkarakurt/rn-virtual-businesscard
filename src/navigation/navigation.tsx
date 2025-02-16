import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CreateCartScreen from '../features/CreateCartScreen/CreateCartScreen';
import HomeScreen from '../features/HomeScreen/HomeScreen';

export type RootStackParamsList = {
  HomeScreen: undefined;
  CreateCartScreen: undefined;
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
        name="CreateCartScreen"
        component={CreateCartScreen}
        options={{headerShown: true, headerTitle: 'Enter Your Informations'}}
        />
    </RootStack.Navigator>
  );
};
