import React from "react";
import { Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {Routes,BrowserRouter,Route,Navigate} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";


const  App  = ()=> {
     console.log("App");
    return (
      <BrowserRouter>
      <Container maxWidth="xxl">
        <Navbar/>
        <Routes>
         

            <Route path = "/" element = {<Navigate to="/posts" replace />}/>

            <Route path = "/auth" index element = {<Auth/>}/>
          
            <Route path = "/posts" element = {<Home/>}/>
            <Route path = "/posts/search" element = {<Home/>}/>
            <Route path = "/posts/:id"  element = {<PostDetails/>}/>  
       

        </Routes>
        
      </Container>
      </BrowserRouter>
    );
  }

  export default App;
