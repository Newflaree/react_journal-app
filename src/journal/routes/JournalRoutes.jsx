import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { JournalPage } from '../pages';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <JournalPage /> } />
      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}
