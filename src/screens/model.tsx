import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../components/nativewindui/Button';
import { CarModel, ModelItem } from '../components/model-item';
import { ListModelsService } from '../services/api/cars/list-models';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../@types/navigation';

type ModelScreenRouteProp = RouteProp<RootStackParamList, 'Model'>;

export default function Model({ route }: { route: ModelScreenRouteProp }) {
  const [brandModels, setBrandModels] = useState<CarModel[]>([]);

  const { brandId, name: brandName } = route.params;

  const navigation = useNavigation();

  const fetchBrandModels = async () => {
    const [response, err] = await ListModelsService({
      brandId,
    });

    if (!err) {
      setBrandModels(response.modelos);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchBrandModels();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <View className="flex-row justify-between items-center py-4 bg-blue-500">
        <Button onPress={handleBack} variant="plain" className="rounded-lg">
          <Feather name="chevron-left" color="white" size={24} />
          <Text className="text-white font-semibold">Voltar</Text>
        </Button>
      </View>

      <FlatList
        data={brandModels}
        renderItem={({ item }) => <ModelItem item={item} />}
        keyExtractor={(item) => item.codigo}
        className="bg-gray-100"
        ListHeaderComponent={
          <Text className="text-2xl font-bold p-4">
            Modelos da marca: {brandName}
          </Text>
        }
        ListEmptyComponent={
          <Text className="text-center p-4">Nenhum modelo disponível</Text>
        }
      />
    </SafeAreaView>
  );
}
