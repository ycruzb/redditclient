import { configureStore } from "@reduxjs/toolkit";
import redditPostsReducer from "../features/redditPosts/redditPostsSlice";

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
