import { useAuth } from '../contexts/auth-context';
import Login from '../screens/login';
import { AppRoutes } from './app.routes';

export const Routes = () => {
  const { isSigned } = useAuth();

  if (!isSigned) {
    return <Login />;
  }

  return <AppRoutes />;
};
