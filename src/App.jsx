import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import InfoPublic from "./views/InfoPublic";
import NotFound from "./components/NotFound"; 
import { Provider } from "./Context";


const App = () => {

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/InfoPublicacion/:id' element={<InfoPublic />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App

