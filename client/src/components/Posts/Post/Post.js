  import React from "react";
  import {Card,Box,CardMedia,CardActions,CardContent,Button,Typography} from "@mui/material"
  import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
  import DeleteIcon from '@mui/icons-material/Delete';
  import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
  import moment from 'moment';
  import {useDispatch} from 'react-redux';
  import {likePost,deletePost} from '../../../actions/postActions'
  import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

  function Post({ post,setCurrentId  }) {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    
    const Likes = () => {
      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };

    return (
      <Card  sx ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '15px', height: '100%', position: 'relative',}}>
          <CardMedia component = "img" image = {post.selectedFile} title = {post.title} sx={{height:170, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken',}} />
          <Box sx ={{position: 'absolute', top: '20px', left: '20px', color: 'white',}}>
              <Typography variant ="h6">{ post.name } </Typography>
              <Typography variant ="body2">{ moment(post.createdAt).fromNow() } </Typography>
          </Box>
          <Box sx={{position: 'absolute', top: '11px', right: '4px', color: 'white',}}>
              {
               (user?.result?._id === post.creator || user?.result?.sub === post.creator) && 
                    <Button style ={{color: 'white'}} size ="large" onClick = {() => setCurrentId(post._id)}>
                      <MoreHorizIcon fontSize="default"/>
                    </Button>
              }
              
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', margin: '20px',}}>
              <Typography  variant ="body2" color ="textSecondary">{post.tags.map(tag =>` #${tag}`)}</Typography>
          </Box>
              <Typography sx ={{padding: '0 16px',}} component ="p" variant ="h5" gutterBottom >{post.title}</Typography>
          <CardContent>
              <Typography component ="p" variant ="body2" color ="textSecondary" gutterBottom >{post.message}</Typography>
          </CardContent>
          <CardActions sx={{padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between',}}>
              <Button disabled = {!user?.result} size= "small" color = "primary" onClick= {()=> {dispatch(likePost(post._id))}}>
                <Likes/>
              </Button> 
              {
                (user?.result?._id === post.creator || user?.result?.sub === post.creator) && 
                  <Button size="small" color = "primary" onClick={()=> dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                  </Button> 
              }
              
          </CardActions>
      </Card>
    );
  }

  export default Post;
