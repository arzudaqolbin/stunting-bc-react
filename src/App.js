import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<RoutesPosyandu />} />
          <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
          <Route path="/posyandu/*" element={<RoutesPosyandu />} />
          <Route path="/puskesmas/*" element={<RoutesPuskesmas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
