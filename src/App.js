import './App.css';
import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Error404 from './pages/ErrorPage';
import Blog from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>} />
        <Route path='*' element={<Error404/>} />
        <Route path='blogs' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
