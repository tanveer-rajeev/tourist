import React,{ useState} from 'react'
import { Avatar,Button,TextField,Paper,Typography,Grid,Container, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin,GoogleLogout } from '@react-oauth/google';
import Icon from './Icon';
import {useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import {signup,signin} from '../../actions/authActions.js'
const Auth = () => {
    const initialState = { firstName: '',lastName: '',email: '',password: '' }
    const [formData,setFormData] = useState(initialState);
    const [showPassword,setShowPassword] = useState(false);
    const handleShowPassword = ()=> setShowPassword((prevShowPassword)=>!prevShowPassword)
    const [isSignup,setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        setIsSignup((prev)=>!prev)
        setShowPassword((prev)=>!prev)
    }
    const handleSubmit = (e) => {
         e.preventDefault();
         if(isSignup)dispatch(signup(formData,navigate));
         else dispatch(signin(formData,navigate));

         console.log(formData);
    }
    const handleChange = (e) => {
       
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const googleSuccess = async(res) => {
        
        const result = jwt_decode(res.credential);
        const token = res.credential;
        console.log(result);
        console.log(token);
        try{
          dispatch({ type : 'AUTH', data: {result, token} })  
          navigate('/');
        }catch(error){
            console.log(error);
        }      
    }

    const googleFailure = (err) => {console.log(err);}
    

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}`}>
        <Container component='main' maxWidth='xs'>
        <Paper sx={{marginTop: 10,display: 'flex',flexDirection: 'column',alignItems: 'center',padding: '10px'}} elevation={6}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup?'Sign Up':'Sign in'}</Typography>
            <Box component ='form'sx = {{ alignItems: 'center',padding: '10px',justifyContent: 'center',}} onSubmit={handleSubmit}>
                <Grid container  spacing={2}>
                    {
                        isSignup && (
                        <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                            <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                        </>
                        )
                    }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword?'text':'password'} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password'/>}

                </Grid>
                <Button sx={{ mt: 3, mb: 2 }} type="submit" fullWidth variant = 'contained' color="primary">
                    {isSignup?'Sign Up':'Sign In'}
                </Button>
                <GoogleLogin

                  render={(renderProps) => (
                    <Button color="primary" fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon/>}                  
                    >
                   Google Sign In
                    </Button>
                  )}
                 onSuccess={googleSuccess}
                 onFailure={googleFailure}
                 cookiePolicy={"single_host_origin"}
                 useOneTap
                />
                
            </Box>
            <Grid container justify="flex-end">
                <Grid item >
                  <Button onClick={switchMode}>
                       {isSignup?'Already have an account ? Sign Up':"Don't have an account Sign"}
                  </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
    </GoogleOAuthProvider>
    
  )
}

export default Auth