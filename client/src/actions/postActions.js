  import * as api from "../api/api";
  import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH,START_LOADING,END_LOADING } from "../constants/actionTypes"
  
  
  // whenever dispatch will call then 
  
  export const getPosts = (page) => async (dispatch) => {
    try {
      dispatch({type: START_LOADING});
      const { data} = await api.fetchPosts(page);
      
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
  
  
    export const getPostsBySearch = (searchQuery) =>async (dispatch) => {
      console.log("action");
      try {
        dispatch({type: START_LOADING});
        const { data: { data }} = await api.fetchPostsBySearch(searchQuery) ;
       
        dispatch({ type: FETCH_BY_SEARCH, payload: data});
        dispatch({ type: END_LOADING });
      } catch (error) {
        console.log(error);
      }
    }
  export const createPost = (newPost) => async (dispatch) => {
  
    try {
      dispatch({type: START_LOADING});
      const { data } = await api.createPost(newPost);
    
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