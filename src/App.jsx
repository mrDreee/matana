import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import NextPage from './components/Menu';
import Mahasiswa from './components/Mahasiswa';
import DosenList from './components/Dosen/DosenList';
import DosenDetail from "./components/Dosen/DosenDetail";
import Agenda from './components/Agenda';
import PrestasiList from './components/PrestasiList';
import Mahasiswa2015 from './components/Students/Mahasiswa2015';
import Mahasiswa2016 from './components/Students/Mahasiswa2016';
import Mahasiswa2017 from './components/Students/Mahasiswa2017';
import Mahasiswa2018 from './components/Students/Mahasiswa2018';
import Mahasiswa2019 from './components/Students/Mahasiswa2019';
import Mahasiswa2020 from './components/Students/Mahasiswa2020';
import Mahasiswa2021 from './components/Students/Mahasiswa2021';
import Mahasiswa2022 from './components/Students/Mahasiswa2022';
import Mahasiswa2023 from './components/Students/Mahasiswa2023';
import Mahasiswa2024 from './components/Students/Mahasiswa2024';
import Prestasi2015 from './components/Prestasi/Prestasi2015';
import Prestasi2016 from './components/Prestasi/Prestasi2016';
import Prestasi2017 from './components/Prestasi/Prestasi2017';
import Prestasi2018 from './components/Prestasi/Prestasi2018';
import Prestasi2019 from './components/Prestasi/Prestasi2019';
import Prestasi2020 from './components/Prestasi/Prestasi2020';
import Prestasi2021 from './components/Prestasi/Prestasi2021';
import Prestasi2022 from './components/Prestasi/Prestasi2022';
import Prestasi2023 from './components/Prestasi/Prestasi2023';
import Prestasi2024 from './components/Prestasi/Prestasi2024';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/menu" element={<NextPage />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/mahasiswa/2015" element={<Mahasiswa2015 />} />
          <Route path="/mahasiswa/2016" element={<Mahasiswa2016 />} />
          <Route path="/mahasiswa/2017" element={<Mahasiswa2017 />} />
          <Route path="/mahasiswa/2018" element={<Mahasiswa2018 />} />
          <Route path="/mahasiswa/2019" element={<Mahasiswa2019 />} />
          <Route path="/mahasiswa/2020" element={<Mahasiswa2020 />} />
          <Route path="/mahasiswa/2021" element={<Mahasiswa2021 />} />
          <Route path="/mahasiswa/2022" element={<Mahasiswa2022 />} />
          <Route path="/mahasiswa/2023" element={<Mahasiswa2023 />} />
          <Route path="/mahasiswa/2024" element={<Mahasiswa2024 />} />
          <Route path="/dosen" element={<DosenList />} />
          <Route path="/dosen/:id" element={<DosenDetail />} />
          <Route path="/prestasi" element={<PrestasiList />} />
          <Route path="/prestasi/2015" element={<Prestasi2015 />} />
          <Route path="/prestasi/2016" element={<Prestasi2016 />} />
          <Route path="/prestasi/2017" element={<Prestasi2017 />} />
          <Route path="/prestasi/2018" element={<Prestasi2018 />} />
          <Route path="/prestasi/2019" element={<Prestasi2019 />} />
          <Route path="/prestasi/2020" element={<Prestasi2020 />} />
          <Route path="/prestasi/2021" element={<Prestasi2021 />} />
          <Route path="/prestasi/2022" element={<Prestasi2022 />} />
          <Route path="/prestasi/2023" element={<Prestasi2023 />} />
          <Route path="/prestasi/2024" element={<Prestasi2024 />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
