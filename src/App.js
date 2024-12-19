import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/index';
import { ListPage } from './pages/listpage';
import { ListPageDetail } from './pages/listdetail';
import './reset.css';
import './style.css';
import { MovieDetail } from './pages/moviedetail/MovieDetail';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lists" element={<ListPage />} />
        <Route path="/listdetail/:id" element={<ListPageDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App