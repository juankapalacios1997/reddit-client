import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import postsReducer from "../features/posts/postSlice";
import searchTermReducer from '../features/Header/searchTerm/searchTermSlice';

export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
    redditPosts: postsReducer,
    searchTerm: searchTermReducer,
  }
});
