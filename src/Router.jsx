import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ReactPage from './pages/ContentPages/React/ReactPage';
import GitPage from './pages/ContentPages/Git/GitPage';
import EtcPage from './pages/ContentPages/Etc/EtcPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/react/:id" element={<ReactPage />} />
        <Route path="/git/:id" element={<GitPage />} />
        <Route path="/etc/:id" element={<EtcPage />} />
      </Routes>
    </BrowserRouter>
  );
}
