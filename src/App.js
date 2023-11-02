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

function App() {
  return (
      // <Router>
      //   <Routes>
      //     <Route path="/*" element={<RoutesPosyandu />} />
      //     <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
      //     <Route path="/posyandu/*" element={<RoutesPosyandu />} />
      //     <Route path="/puskesmas/*" element={<RoutesPuskesmas />} />
      //   </Routes>
      // </Router>
      // <Login />
      // <PageProfilePosyandu />
      <CalculateStunting />

  );
}

export default App;
