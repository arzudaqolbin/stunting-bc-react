import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import CalculateStunting from "./CalculateStunting";
import Beranda from "./view-publik/pages/Beranda";
import PageDetailBalitaKelurahan from "./view-kelurahan/pages/PageDetailBalitaKelurahan";
import PageEditBalitaPuskesmas from "./view-puskesmas/page/PageEditBalitaPuskesmas";
import { createContext } from "react";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/coba-api" element={<CalculateStunting />} />
          <Route path= "/*" element={<RoutesPublik />} />
          <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
          <Route path="/posyandu/:idPosyandu/*" element={<RoutesPosyandu />} />
          <Route path="/puskesmas/:idPuskesmas/*" element={<RoutesPuskesmas />} />
        </Routes>
      </Router>
      // <Login />
      // <PageProfilePosyandu />
      // <PageEditBalitaPuskesmas />
    

  );
}

export default App;
