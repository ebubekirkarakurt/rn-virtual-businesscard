import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import CreateCartScreen from '../CreateCartScreen/CreateCartScreen';

export type RootStackParamsList = {
  HomeScreen: undefined;
  CreateCartScreen: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = {headerShown: false};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions} initialRouteName='HomeScreen' >
      <RootStack.Screen name="HomeScreen" component={HomeScreen}></RootStack.Screen>
      <RootStack.Screen
        name="CreateCartScreen"
        component={CreateCartScreen}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
};
