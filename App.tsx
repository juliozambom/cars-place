import Login from './src/screens/login';
import './global.css';
import { AuthContextProvider } from './src/contexts/auth-context';
import HomeScreen from './src/screens/home';
import Model from './src/screens/model';

const App = () => {
  return (
    <AuthContextProvider>
      <Model />
    </AuthContextProvider>
  );
};

export default App;
