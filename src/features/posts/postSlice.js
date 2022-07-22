import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../../api/reddit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  activeSubreddit: "/r/Home",
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
        changeActiveSubreddit(state, action) {
            state.activeSubreddit = action.payload;
        },
    }
});

export const {
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed,
    changeActiveSubreddit
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

export const selectPosts = (state) => state.redditPosts.posts




