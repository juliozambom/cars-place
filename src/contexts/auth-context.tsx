import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageUserKey } from '../lib/async-storage/keys';

interface UserProps {
  id: number;
  name: string;
  token: string;
}

interface AuthContextProps {
  user: UserProps;
  refreshUser: () => Promise<void>;
  isSigned: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({} as UserProps);

  async function refreshUser() {
    const userFromAsyncStorage =
      await AsyncStorage.getItem(AsyncStorageUserKey);

    if (userFromAsyncStorage) {
      setUser(JSON.parse(userFromAsyncStorage) as UserProps);
    }
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        refreshUser,
        isSigned: !!user?.id,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};