import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {StoryItemInterface} from "../StoriesGrid/StoryItem.interface";

export interface StoryScreenState {
  data: StoryItemInterface | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: StoryScreenState = {
  data: null,
  status: 'idle',
};

export const storyScreenSlice = createSlice({
  name: 'StoryScreen',
  initialState,
  reducers: {
    setStoryData: (state, action: PayloadAction<StoryScreenState['data']>) => {
      state.data = action.payload;
    },
  },
});

export const { setStoryData } = storyScreenSlice.actions;

export const storyScreenDataSelector = (state: RootState) => state.StoryScreen.data;


export default storyScreenSlice.reducer;
