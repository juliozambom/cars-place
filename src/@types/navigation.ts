import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Model: {
    brandId: number;
    name: string;
  };
};

export type NavigationType = NavigationProp<RootStackParamList>;
