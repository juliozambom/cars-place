import { Text, View } from 'react-native';
export interface CarBrand {
  codigo: string;
  nome: string;
}

export const BrandItem = ({ item }: { item: CarBrand }) => {
  return (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg">{item.nome}</Text>
      <Text className="text-sm text-gray-500">Código: {item.codigo}</Text>
    </View>
  );
};
