import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './src/contexts/auth-context';
import { Routes } from './src/routes';

import './global.css';

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
