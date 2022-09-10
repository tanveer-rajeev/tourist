  import * as api from "../api/api";
  import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes"


  // whenever dispatch will call then 

  export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();

       dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createPost = (newPost) => async (dispatch) => {
  
    try {
      const { data } = await api.createPost(newPost);
      console.log(data);
       dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (id,updatePost) => async (dispatch) => {

    try {
      const { data } = await api.updatePost(id,updatePost);
      console.log(data);
      dispatch({ type: UPDATE,payload: data});
    } catch (error) {
      console.log(error);
    }
  }

  export const deletePost = (id) => async (dispatch) => {

    try {
      await api.deletePost(id);
     
      dispatch({ type: DELETE,payload: id});
    } catch (error) {
      console.log(error);
    }
  }
  export const likePost = (id) => async (dispatch) => {

    try {
      const { data } = await api.likePost(id);
     
      dispatch({ type: UPDATE,payload: data});
    } catch (error) {
      console.log(error);
    }
  }