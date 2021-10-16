import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import StoryScreenReducer from '../components/StoryScreen/storyScreenSlice';
import StoriesGridReducer from '../components/StoriesGrid/storiesGridSlice';

export const store = configureStore({
  reducer: {
    StoryScreen: StoryScreenReducer,
    StoriesGrid: StoriesGridReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
