import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Model from '../screens/model';
import { RootStackParamList } from '../@types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Model" component={Model} />
    </Stack.Navigator>
  );
};
