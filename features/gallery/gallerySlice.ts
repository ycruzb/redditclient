import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GalleryState {
  images: string[];
}

const initialState: GalleryState = {
  images: [],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage: (state: GalleryState, action: PayloadAction<string>) => {
      if (
        state.images.filter((image: string) => image === action.payload)
          .length === 0
      ) {
        state.images.push(action.payload);
      }
    },
  },
});

export const { addImage } = gallerySlice.actions;

export default gallerySlice.reducer;
