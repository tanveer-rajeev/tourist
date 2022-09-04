  import React, { useState, useEffect } from "react";
  import {TextField,Typography,Button,Paper,FormControl,Box,Grid,} from "@mui/material";
  import FileBase from "react-file-base64";
  import { useDispatch,useSelector } from "react-redux";
  import { createPost,updatePost } from "../../actions/postActions";

  const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({creator: "",title: "",message: "",tags: "",selectedFile: "",});
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId):null)
    
    useEffect(()=>{
      if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) => {
      e.preventDefault();

      if(currentId){
        dispatch(updatePost(currentId,postData));
      }
      else {
        dispatch(createPost(postData));
      }
      clear();
    };

    const clear = () => {
      setCurrentId(null);
      setPostData({creator: "",title: "",message: "",tags: "",selectedFile: ""});
    };

    return (
      <Paper  sx={{padding: 2,backgroundImage: "../../images/24161322546_1019cebb0c_b.jpg",  }}>
        <FormControl  component="form"  sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}  autoComplete ="off" noValidate  onSubmit={handleSubmit}>        
          <Typography variant="h6">{currentId ? 'Editing':'Creating'} a memrory</Typography>        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={14}>
              <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) => {setPostData({ ...postData, creator: e.target.value });}}/>
            </Grid>
            <Grid item xs={12} sm={14}>
              <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => {setPostData({ ...postData, title: e.target.value });  }}/>
            </Grid>
            <Grid item xs={12} sm={14}>
              <TextField  name="message"  variant="outlined"  label="message"  fullWidth  value={postData.message}  onChange={(e) => {setPostData({ ...postData, message: e.target.value });}}/>
            </Grid>
            <Grid item xs={12} sm={14}>
              <TextField  name="tags"  variant="outlined"  label="tags"  fullWidth  value={postData.tags}  onChange={(e) => {setPostData({ ...postData, tags: e.target.value.split(",") });  }}/>
            </Grid>
          </Grid>
          <Box sx={{ width: "97%", margin: "10px 0" }}>
            <FileBase  type="file"  multiple={false}  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
          </Box>        
          <Button  sx={{ marginBottom: 2 }}  variant="contained"  color="primary"  size="large"  type="submit">  Submit </Button>
          <Button  variant="contained"  color="secondary"  size="small"  onClick={clear}>  Clear  </Button>      
        </FormControl>
      </Paper>
    );
  };

  export default Form;
