import { createSlice } from '@reduxjs/toolkit';
import { getPostComments } from '../../../api/reddit';


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loadingComments: false,
        errorComments: false,
    },
    reducers: {
        startGetComments(state) {
        // If we're hiding comment, don't fetch the comments.
            state.loadingComments = true;
            state.errorComments = false;
        },
        getCommentsSuccess(state, action) {
            state.loadingComments = false;
            state.errorComments = false;
            state.comments.push(action.payload.comments);
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
