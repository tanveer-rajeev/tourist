import React from "react";
import { Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
  function App() {
 
    return (
      <Container maxidth="lg">
       
        <Navbar/>
        <Home/>
      </Container>
    );
  }

  export default App;
