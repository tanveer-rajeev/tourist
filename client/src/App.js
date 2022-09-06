import React from "react";
import { Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {Routes,BrowserRouter,Route,Navigate,Outlet,} from "react-router-dom";
import Auth from "./components/Auth/Auth";
  function App() {
 
    return (
      <BrowserRouter>
      <Container maxidth="lg">
        <Navbar/>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/auth" index element={<Auth/>}/>
          
        </Routes>
        
      </Container>
      </BrowserRouter>
    );
  }

  export default App;
