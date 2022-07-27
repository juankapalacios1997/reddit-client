import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loadingComments: false,
        errorComments: false,
    },
    reducers: {
        startGetComments(state, action) {
        // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload].showingComments = !state.posts[action.payload]
            .showingComments;
            if (!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    }
});

export const {
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments,
  } = commentsSlice.actions;
  
  export default commentsSlice.reducer;
  

  export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
      dispatch(startGetComments(index));
      const comments = await getPostComments(permalink);
      dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
      dispatch(getCommentsFailed(index));
    }
  };
