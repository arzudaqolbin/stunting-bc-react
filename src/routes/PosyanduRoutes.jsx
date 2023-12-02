import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PageProfilePosyandu from "../view-posyandu/pages/PageProfilePosyandu";
import PageAddBalitaPosyandu from "../view-posyandu/pages/PageAddBalitaPosyandu";
import PageEditPengukuranPosyandu from "../view-posyandu/pages/PageEditPengukuranPosyandu";
import PageDetailBalitaPosyandu from "../view-posyandu/pages/PageDetailBalitaPosyandu";
import PageTabelBalitaPosyandu from "../view-posyandu/pages/PageTabelBalitaPosyandu";
import PageEditPwPosyandu from "../view-posyandu/pages/PageEditPwPosyandu";
import PageDataTambahanPosyandu from "../view-posyandu/pages/PageDataTambahanPosyandu";
import Login from "../view-publik/pages/Login";
import NotFound from "../view-publik/pages/NotFound";

const RoutesPosyandu = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<PrivateRoute element={<PageProfilePosyandu />} requiredRole="Posyandu" />}/>
      {/* <Route path="/profile" element={<PageProfilePosyandu />} /> */}
      {/* tambah balita */}
      <Route path="/tambah-balita" element={<PrivateRoute element={<PageAddBalitaPosyandu/>} requiredRole="Posyandu" />}/>
      {/* tambah pengukuran */}
      
      {/* daftar tabel balita */}
      <Route path="/daftar-balita" element={<PrivateRoute element={<PageTabelBalitaPosyandu/>} requiredRole="Posyandu" />}/>
      {/* detail balita */}
      <Route path="/detail-balita/:idBalita" element={<PrivateRoute element={<PageDetailBalitaPosyandu/>} requiredRole="Posyandu" />}/>
      {/* edit pengukuran balita */}
      <Route path="/edit-pengukuran/:idPengukuran" element={<PrivateRoute element={<PageEditPengukuranPosyandu/>} requiredRole="Posyandu" />}/>
      {/* edit password posyandu */}
      <Route path="/edit-pw" element={<PrivateRoute element={<PageEditPwPosyandu/>} requiredRole="Posyandu" />}/>
      {/* tambah data tambahan balita*/}
      <Route path="/tambah-data-tambahan/:idBalita" element={<PrivateRoute element={<PageDataTambahanPosyandu/>} requiredRole="Posyandu" />}/>

      {/* Fallback jika route tidak ditemukan */}
      <Route path="*" element={<Navigate to="/not-found" replace />} />

      {/* Halaman Not Found */}
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPosyandu;
