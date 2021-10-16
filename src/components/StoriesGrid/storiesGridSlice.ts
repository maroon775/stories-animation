import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetch} from './storiesAPI';
import {StoryItemInterface, StoryItemStateInterface} from "./StoryItem.interface";
import {RootState} from "../../app/store";

export interface StoriesGridState {
    status: 'idle' | 'loading' | 'failed';
    items: StoryItemInterface[]
}

const initialState: StoriesGridState = {
    items: [],
    status: 'idle',
};

export const getStoriesAsync = createAsyncThunk(
    'StoriesGrid/fetch',
    async () => {
        const response = await fetch();
        return response.data;
    }
);

export const storiesGridSlice = createSlice({
    name: 'StoriesGrid',
    initialState,
    reducers: {
        setStoryState: (state, action: PayloadAction<{ story: StoryItemInterface, state: StoryItemStateInterface }>) => {
            console.log({action})

            state.items = state.items.map((item) => (action.payload.story.id === item.id ? {
                ...item,
                state: action.payload.state
            } : item));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload.items;
            });
    },
});


export const storiesSelector = (state: RootState) => state.StoriesGrid.items;

export const {setStoryState} = storiesGridSlice.actions;
export default storiesGridSlice.reducer;
