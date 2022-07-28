import { createSlice } from '@reduxjs/toolkit';
import { getPostComments } from '../../../api/reddit';


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        showingComments: false,
        loadingComments: false,
        errorComments: false,
    },
    reducers: {
        startGetComments(state) {
          state.showingComments = !state.showComments
        // If we're hiding comment, don't fetch the comments.
          if (!state.showComments) {
            return;
          }
            state.loadingComments = true;
            state.errorComments = false;
        },
        getCommentsSuccess(state, action) {
            state.loadingComments = false;
            state[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state) {
            state.loadingComments = false;
            state.errorComments = true;
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
