import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Aside from './components/Aside/Aside';
import Main from './pages/Main/Main';
import Content from './pages/Content/Content';

export default function Router() {
  return (
    <BrowserRouter basename="ERROR_NOTE">
      <Nav />
      <Aside />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/content/:category" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}
