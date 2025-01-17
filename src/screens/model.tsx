import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../contexts/auth-context';
import { Button } from '../components/nativewindui/Button';
import { CarModel, ModelItem } from '../components/model-item';
import { ListModelsService } from '../services/api/cars/list-models';

export default function Model() {
  const { user } = useAuth();
  const [brandModels, setBrandModels] = useState<CarModel[]>([]);

  const fetchBrandModels = async () => {
    const [response, err] = await ListModelsService({
      brandId: 10,
    });

    if (!err) {
      setBrandModels(response.modelos);
    }
  };

  const handleLogout = () => {
    Alert.alert('Você está saindo do app.', 'Volte sempre!');
  };

  useEffect(() => {
    fetchBrandModels();
  }, []);

  console.log(brandModels);

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <View className="flex-row justify-between items-center py-4 bg-blue-500">
        <Button onPress={handleLogout} variant="plain" className="rounded-lg">
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
            Modelos da marca: Cadilac
          </Text>
        }
        ListEmptyComponent={
          <Text className="text-center p-4">Nenhum modelo disponível</Text>
        }
      />
    </SafeAreaView>
  );
}
