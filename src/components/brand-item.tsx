import { Text } from 'react-native';
import { Button } from './nativewindui/Button';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../@types/navigation';
export interface CarBrand {
  codigo: string;
  nome: string;
}

export const BrandItem = ({ item }: { item: CarBrand }) => {
  const navigation = useNavigation<NavigationType>();

  const onPress = () => {
    navigation.navigate('Model', {
      brandId: Number(item.codigo),
      name: item.nome,
    });
  };

  return (
    <Button
      variant="plain"
      className="border-b items-start flex-col border-gray-200 active:bg-gray-300"
      onPress={onPress}
    >
      <Text className="text-lg mt-2">{item.nome}</Text>
      <Text className="text-sm text-gray-500 mb-2">Código: {item.codigo}</Text>
    </Button>
  );
};
