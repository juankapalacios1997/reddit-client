import { createSlice } from '@reduxjs/toolkit';
import 

export const searchBarSlice = createSlice({
    name: "searchTerm",
    initialState: "",
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
          },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        }
    }
});

export const { setSearchTerm, setSelectedSubreddit } = searchBarSlice.actions;
export default searchBarSlice.reducer;

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