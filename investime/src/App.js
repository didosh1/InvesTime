import './App.css';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from './components/Layout/Layout';
import AttractionCardPagintation from './components/Attractions/AttractionCardPagination/AttractionCardPagination';
import MapWithIcon from './components/Map/Map';
import { YMaps } from 'react-yandex-maps';
import CardPagination from './components/Shop/CardPagination/CardPagination';
import AuthenticationForm from './components/AutorizationComponent/AuthFormComp/AuthenticationForm';
import AuthenticationPage from './components/AutorizationComponent/AuthPage/AuthPage';
import ProfilePage from './components/Profile/ProfilePage';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<WelcomePage />}>
      </Route>
      <Route path="/authentication" element={<AuthenticationPage />}>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<YMaps><MapWithIcon /></YMaps>} />
        <Route path="/attractions" element={<AttractionCardPagintation />} />
        <Route path="/shop" element={<AttractionCardPagintation />} />
        <Route path="/events" element={<CardPagination />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route index element={<Navigate to="/welcome" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
