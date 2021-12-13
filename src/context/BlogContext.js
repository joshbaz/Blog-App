import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

//reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter((blogPost)=> blogPost.id !== action.payload )
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    default:
      return state;
  }
};

//actions
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

//destructure the context and provider
export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost
  },
  []
);
