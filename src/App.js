import React, { useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  // const [test, setTest] = useState(false);
  // const loadingHandler = () => {
  //   setTest(true);
  //   console.log('test');
  // };

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      {/* {test && <div>asdasd</div>} */}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
