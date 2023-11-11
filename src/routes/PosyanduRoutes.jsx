import { Routes, Route } from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import AddPage from "../view-posyandu/pages/addpage";
import LihatPage from "../view-posyandu/pages/lihatpage";
import PageProfilePosyandu from "../view-posyandu/pages/PageProfilePosyandu";
import PageAddBalitaPosyandu from "../view-posyandu/pages/PageAddBalitaPosyandu";
import PageAddPengukuranPosyandu from "../view-posyandu/pages/PageAddPengukuranPosyandu";
import PageAddPengukuranSelectedPosyandu from "../view-posyandu/pages/PageAddPengukuranSelectedPosyandu";
import PageEditPengukuranPosyandu from "../view-posyandu/pages/PageEditPengukuranPosyandu";
import PageDetailBalitaPosyandu from "../view-posyandu/pages/PageDetailBalitaPosyandu";
import PageTabelBalitaPosyandu from "../view-posyandu/pages/PageTabelBalitaPosyandu";
import PageEditPwPosyandu from "../view-posyandu/pages/PageEditPwPosyandu";
import PageDataTambahanPosyandu from "../view-posyandu/pages/PageDataTambahanPosyandu";

const RoutesPosyandu = () => {
  return (
    <Routes>
      <Route path="/" element={<PageProfilePosyandu />} />
      <Route path="/profile" element={<PageProfilePosyandu />} />
      {/* tambah balita */}
      <Route path="/tambah-balita" element={<PageAddBalitaPosyandu />} />
      {/* tambah pengukuran */}
      <Route
        path="/tambah-pengukuran"
        element={<PageAddPengukuranPosyandu />}
      />
      <Route
        path="/tambah-pengukuran/:idBalita"
        element={<PageAddPengukuranSelectedPosyandu />}
      />
      {/* daftar tabel balita */}
      <Route path="/daftar-balita" element={<PageTabelBalitaPosyandu />} />
      {/* detail balita */}
      <Route
        path="/detail-balita/:idBalita"
        element={<PageDetailBalitaPosyandu />}
      />
      {/* edit pengukuran balita */}
      <Route
        path="/edit-pengukuran/:idBalita"
        element={<PageEditPengukuranPosyandu />}
      />
      {/* edit password posyandu */}
      <Route path="/edit-pw" element={<PageEditPwPosyandu />} />
      {/* tambah data tambahan balita*/}
      <Route
        path="/tambah-data-tambahan/:idBalita"
        element={<PageDataTambahanPosyandu />}
      />
    </Routes>
  );
};

export default RoutesPosyandu;
