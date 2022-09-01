import * as api from "../api/api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    return dispatch({ type: "FATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    console.log(data);
    return dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
