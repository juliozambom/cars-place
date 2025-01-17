import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: {};
  Model: {
    brandId: number;
    name: string;
  };
};

export type NavigationType = NavigationProp<RootStackParamList>;
