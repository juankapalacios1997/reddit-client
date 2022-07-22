import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/reddit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
};

const postsSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
    }
});

export const {
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed
} = postsSlice.actions;

export default postsSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);
        dispatch(getPostsSuccess(posts));
        } catch (error) {
      dispatch(getPostsFailed());
    }
};




