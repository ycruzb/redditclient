import { configureStore } from "@reduxjs/toolkit";
import redditPostsReducer from "../features/redditPosts/redditPostsSlice";
import mobileMenuReducer from "../features/mobileMenu/mobileMenuSlice";
import galleryReducer from "../features/gallery/gallerySlice";

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
    mobileMenu: mobileMenuReducer,
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
