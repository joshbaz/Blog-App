import React, { useReducer } from "react";

const BlogContext = React.createContext();

//reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

//create a new component
export const BlogProvider = ({ children }) => {
  //const [blogPosts, setBlogPosts] = useState([]);
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  //when using state
  // const addBlogPost = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog Post #${blogPosts.length + 1}` },
  //   ]);
  // };

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;