import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import postsReducer from "../features/posts/postSlice";
import searchTermReducer from '../features/Header/searchTerm/searchTermSlice';
import commentsReducer from '../features/posts/comments/commentsSlice';

export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
    redditPosts: postsReducer,
    searchTerm: searchTermReducer,
    comments: commentsReducer,
  }
});
