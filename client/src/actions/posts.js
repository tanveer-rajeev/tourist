import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    return dispatch({ type: "FATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
