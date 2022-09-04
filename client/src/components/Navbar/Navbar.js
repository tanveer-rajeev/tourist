    import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
    import React from 'react'
    import memories from "../../images/memories.png";
    import {Link} from 'react-router-dom';
    
    const Navbar = () => {
        const user = null;
        
        return (
        <AppBar sx={{borderRadius: 3, margin: '30px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}} position="static" color="inherit">
          <Box>
            <Typography component={Link} to="/" variant="h2" align="center"> Memories </Typography>
            <img  src={memories} alt="memories" height="60" />           
          </Box>
          <Toolbar>
            {user ? (
                    <div>
                      <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                      <Typography variant="h6">{user.result.name}</Typography>
                      <Button variant="contained" color="secondary">Logout</Button>
                    </div>
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