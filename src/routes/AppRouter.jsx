import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HarryPotterPage from '../pages/harryPotter/HarryPotter';

import HomePage from '../pages/Home/HomePage';
import RickMortyPage from '../pages/RickMorty/RickMorty';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rick-and-morty" element={<RickMortyPage />} />
        <Route path="harry-potter" element={<HarryPotterPage />} />
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
