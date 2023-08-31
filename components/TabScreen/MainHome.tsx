import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Display from './Display';
import HomeTab from './HomeTab';


const HomeStack = createNativeStackNavigator();

export default function MainHome() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }}/>
      <HomeStack.Screen name = "Display" component = {Display} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

