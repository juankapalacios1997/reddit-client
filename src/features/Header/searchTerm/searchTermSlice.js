import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectPosts } from '../../posts/postSlice';

export const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: {
        searchTerm: "" },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
          },
    }
});

export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
const selectSearchTerm = (state) => state.searchTerm.searchTerm;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return posts;
    }
);