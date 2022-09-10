  import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
  import React,{ useEffect, useState} from 'react'
  import TravelFood from "../../images/TravelFood.jpg";
  import {Link} from 'react-router-dom';
  import { deepPurple } from '@mui/material/colors';
  import { useDispatch } from 'react-redux';
  import {useNavigate,useLocation} from 'react-router-dom';
  
  const Navbar = () => {
      const [user,setUser]  = useState(JSON.parse(localStorage.getItem('profile')));
      
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const Logout = ()=>{
        dispatch({type:'LOGOUT'});
        navigate('/');
        setUser(null);
      }
  
      useEffect(() => {
        const token = user?.token;
        
      })
      useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
      },[location])

      return (
        <AppBar sx={{borderRadius: 3, margin: '30px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding: '10px 50px'}} position="static" color="inherit">
          <Box sx={{display: 'flex',alignItems: 'center'}}>
            
            <img src={TravelFood} alt="memories" height="70" /> 
             <Typography sx={{color: 'rgba(0,183,255,1)',textDecoration:'none'}} component={Link} to="/" variant="h2" align="center">
                Tourist
            </Typography>           
          </Box>
          
          <Toolbar sx={{display: 'flex', justifyContent: 'flex-end', width: '800px'}} >
            {user ? (
                <Box sx={{  display:'flex',justifyContent: 'space-between',width: '400px',}}>                                           
                  <Avatar sx={{backgroundColor: deepPurple}}  src={user.result.picture ? user.result.picture:null} alt={user.result.name} >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography sx={{display: 'flex',alignItems: 'center',}} variant="h6">{user.result.name}</Typography>
                  <Button variant= "contained" color= "secondary" onClick= {Logout}>Logout</Button>
                </Box>
                )
              : (
                <div>
                    <Button component={Link} to ='/auth' variant = 'contained' color="primary">Sign In</Button>
                </div>
                )
            }
          </Toolbar>
        
        </AppBar>
  )
  }

  export default Navbar