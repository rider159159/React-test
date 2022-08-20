import Tour from './components/layout/Tour';
import TourDetail from './components/page/TourDetail';
import TourList from './components/page/TourList';
import Notfound from "./components/page/Notfound"
import Home from "./components/page/Home"
import Header from "./components/layout/Header"

import * as React from "react";
import { Routes, Route,Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <div className="content min-h-[calc(100vh-96px)]">
        <Outlet />
      </div>
      <footer className="bg-black text-white h-10 flex items-center justify-center">Ryder © 2022/08/20 練習使用</footer>
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* 註冊路由，類似 router.index.js */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} >
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
          <Route path="*" element={ <Notfound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
