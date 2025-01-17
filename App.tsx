import Login from './src/screens/login';
import './global.css';
import { AuthContextProvider } from './src/contexts/auth-context';

const App = () => {
  return (
    <AuthContextProvider>
      <Login />;
    </AuthContextProvider>
  );
};

export default App;
