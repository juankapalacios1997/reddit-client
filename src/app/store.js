import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import postsReducer from "../features/posts/postSlice";

export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
    redditPosts: postsReducer,
  }
});
