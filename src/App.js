import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import PageTambahPosyandu from "./view-kelurahan/pages/PageTambahPosyandu";
import PageAddBalitaPosyandu from "./view-posyandu/pages/PageAddBalitaPosyandu";
import PageAddPengukuranPosyandu from "./view-posyandu/pages/PageAddPengukuranPosyandu";
import PageDataTambahanPosyandu from "./view-posyandu/pages/PageDataTambahanPosyandu";
import PageEditPengukuranPosyandu from "./view-posyandu/pages/PageEditPengukuranPosyandu";
import PageEditPwPosyandu from "./view-posyandu/pages/PageEditPwPosyandu";
import PageEditAkunPosyandu from "./view-kelurahan/pages/PageEditAkunPosyandu";
import PageProfilePosyandu from "./view-posyandu/pages/PageProfilePosyandu";
import CalculateStunting from "./CalculateStunting";
import PageAddPengukuranSelectedPuskesmas from "./view-puskesmas/page/PageAddPengukuranSelectedPuskesmas";
import LihatPage from "./view-posyandu/pages/lihatpage";
import PageEditBalitaPuskesmas from "./view-puskesmas/page/PageEditBalitaPuskesmas"

function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="/*" element={<RoutesPosyandu />} />
          <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
          <Route path="/posyandu/*" element={<RoutesPosyandu />} />
          <Route path="/puskesmas/*" element={<RoutesPuskesmas />} /> */}
          <Route path="/add-balita" element={<PageAddBalitaPosyandu />} />
          <Route path="/lihat-balita" element={<LihatPage />} />
          <Route path="/add-pengukuran" element={<PageAddPengukuranPosyandu/>} />
          <Route path="/edit-balita/:id" element={<PageEditBalitaPuskesmas/>} />
          <Route path="/add-data-tambahan-balita/:id" element={<PageDataTambahanPosyandu/>} />
          <Route path="/profil-posyandu/:id" element={<PageProfilePosyandu/>} />
          <Route path="/edit-pw-posyandu/:id" element={<PageEditPwPosyandu/>} />
        </Routes>
      </Router>
      // <Login />
      // <PageAddBalitaPosyandu/>
      // <LihatBayi/>
      // <PageProfilePosyandu />
      // <CalculateStunting />

  );
}

export default App;
