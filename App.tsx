import Login from './src/screens/login';
import './global.css';
import { AuthContextProvider } from './src/contexts/auth-context';
import HomeScreen from './src/screens/home';

const App = () => {
  return (
    <AuthContextProvider>
      <HomeScreen />
    </AuthContextProvider>
  );
};

export default App;
