import { Route, Routes } from 'react-router-dom';
// Routes
import { AuthRoutes } from '../auth/routes';
import {JournalRoutes} from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      { /* Login y Registro */ }
      <Route path='auth/*' element={ <AuthRoutes /> } />

      { /* JournalApp */ }
      <Route path='/*' element={ <JournalRoutes /> } />
    </Routes>
  );
}
