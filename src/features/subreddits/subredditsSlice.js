import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../../api/reddit';

const initialState = {
  subreddits: [],
  activeSubreddit: "r/Home",
  error: false,
  isLoading: false,
};

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
        state.isLoading = true;
        state.error = false;
    },
    getSubredditsSuccess(state, action) {
        state.isLoading = false;
        state.subreddits = action.payload;
    },
    changeActiveSubreddit(state, action) {
        state.activeSubreddit = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetSubreddits,
} = subredditsSlice.actions;

export default subredditsSlice.reducer;

// This is a Redux Thunk that gets subreddits.
export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startGetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
