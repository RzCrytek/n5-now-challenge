import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import RickMortyPage from '@/pages/rickMorty/RickMorty';
import HarryPotterPage from '@/pages/harryPotter/HarryPotter';

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
