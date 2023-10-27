import './App.css';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from './components/Layout/Layout';
import AttractionCardPagintation from './components/Attractions/AttractionCardPagination/AttractionCardPagination';
import MapWithIcon from './components/Map/Map';
import { YMaps } from 'react-yandex-maps';
import CardPagination from './components/Events/CardPagination/CardPagination';
import AuthenticationPage from './components/AutorizationComponent/AuthPage/AuthPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import ProfilePage from './components/Profile/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import ShopComponent from './components/Shop/ShopComponent/ShopComponent';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<WelcomePage />}>
      </Route>
      <Route path="/authentication/:linkType" element={<AuthenticationPage />}>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<YMaps><MapWithIcon /></YMaps>} />
        <Route path="/attractions" element={<AttractionCardPagintation />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/events" element={<CardPagination />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route index element={<Navigate to="/welcome" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
