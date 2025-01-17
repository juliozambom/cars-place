import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { ListBrandsService } from '../services/api/cars/list-brands';
import { useAuth } from '../contexts/auth-context';
import { BrandItem, CarBrand } from '../components/brand-item';

export default function Home() {
  const { user } = useAuth();
  const [carBrands, setCarBrands] = useState<CarBrand[]>([]);

  const fetchCarBrands = async () => {
    const [response, err] = await ListBrandsService();

    if (!err) {
      setCarBrands(response);
    }
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  useEffect(() => {
    fetchCarBrands();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <View className="flex-row justify-between items-center p-4 bg-blue-500">
        <Text className="text-xl font-bold text-white">Olá, {user.name}!</Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={carBrands}
        renderItem={({ item }) => <BrandItem item={item} />}
        keyExtractor={(item) => item.codigo}
        className="bg-gray-100"
        ListHeaderComponent={
          <Text className="text-2xl font-bold p-4">Marcas de carro</Text>
        }
        ListEmptyComponent={
          <Text className="text-center p-4">Nenhuma marca disponível</Text>
        }
      />
    </SafeAreaView>
  );
}
