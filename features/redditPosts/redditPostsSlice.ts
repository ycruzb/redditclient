import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface RedditPost {
  id: string;
  title: string;
  author: string;
  date: number;
  comments: number;
  thumbnail: string;
  unread_status: boolean;
}

interface RedditPostsState {
  posts: RedditPost[];
  active_post: boolean | RedditPost;
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
        id: item.data.id,
        title: item.data.title,
        author: item.data.author,
        date: item.data.created,
        comments: item.data.num_comments,
        thumbnail: item.data.thumbnail,
        unread_status: true,
      };
    });
    return result;
  }
);

export const redditPostsSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {
    turnActive: (state: RedditPostsState, action: PayloadAction<string>) => {
      state.active_post = state.posts.filter(
        (post: RedditPost) => post.id === action.payload
      )[0];
      state.posts = state.posts.map((post: RedditPost) =>
        action.payload === post.id ? { ...post, unread_status: false } : post
      );
    },
    dismissPost: (state: RedditPostsState, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (post: RedditPost) => post.id !== action.payload
      );
    },
    dismissAll: (state: RedditPostsState) => {
      state.posts = [];
    },
  },
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

export const { turnActive, dismissPost, dismissAll } = redditPostsSlice.actions;

export default redditPostsSlice.reducer;
