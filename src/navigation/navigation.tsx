import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';

export type RootStackParamsList = {
  HomeScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = {headerShown: false};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    </RootStack.Navigator>
  );
};
