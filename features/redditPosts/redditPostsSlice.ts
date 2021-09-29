import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface RedditPost {
  title: string;
  author: string;
  date: number;
  comments: number;
  unread_status: boolean;
}

interface RedditPostsState {
  posts: RedditPost[];
  active_post: boolean | number;
  fetching: boolean;
  fetching_error: boolean;
}

const initialState: RedditPostsState = {
  posts: [],
  active_post: false,
  fetching: true,
  fetching_error: false,
};

export const fetchTopPosts = createAsyncThunk(
  "redditPosts/fetchTopPosts",
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`https://www.reddit.com/top.json`);
    const responseJson = await response.json();
    const result: RedditPost[] = responseJson.data.children.map((item: any) => {
      return {
        title: item.data.title,
        author: item.data.author_fullname,
        date: item.data.created,
        comments: item.data.num_comments,
        unread_status: true,
      };
    });
    return result;
  }
);

export const redditPostsSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.fetching = false;
    });
    builder.addCase(fetchTopPosts.rejected, (state) => {
      state.fetching_error = true;
      state.fetching = false;
    });
  },
});

export default redditPostsSlice.reducer;
