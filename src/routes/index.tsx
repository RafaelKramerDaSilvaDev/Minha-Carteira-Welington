import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { logged } = useAuth();

  return <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
