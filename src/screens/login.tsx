import { Button } from '@/src/components/nativewindui/Button';
import { Text } from '@/src/components/nativewindui/Text';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import { LoginService } from '../services/api/auth/login';
import { cn } from '../lib/cn';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSigning, setIsSigning] = useState(false);

  const handleLogin = async () => {
    if (!user) {
      Alert.alert('Ocorreu um erro', 'Preencha o seu usuário');
      return;
    }

    if (!password) {
      Alert.alert('Ocorreu um erro', 'Preencha a sua senha');
      return;
    }

    setIsSigning(true);

    const [response, err] = await LoginService({
      user,
      password,
    });

    if (err && response?.message) {
      Alert.alert('Ocorreu um erro', response.message);
    } else if (err) {
      Alert.alert(
        'Ocorreu um erro',
        'Erro desconhecido, tente novamente mais tarde.'
      );
    }

    if (response && !err) {
    }

    setIsSigning(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 justify-center px-8">
        <Text className="text-3xl font-bold mb-6 text-center text-gray-800">
          Cars Place
        </Text>

        <View className="bg-white p-6 rounded-lg shadow-md">
          <TextInput
            className="border-b border-gray-300 py-2 px-4 mb-4"
            placeholder="user"
            value={user}
            onChangeText={setUser}
            autoCapitalize="none"
          />

          <TextInput
            className="border-b border-gray-300 py-2 px-4 mb-6"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button disabled={isSigning} className="mt-2" onPress={handleLogin}>
            {isSigning && <ActivityIndicator color="white" />}
            <Text
              className={cn('text-white text-center font-semibold', {
                'text-white/50': isSigning,
              })}
            >
              Login
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
