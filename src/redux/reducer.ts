import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from 'redux/store';
import { ActiveTab, AppReducerState, Image } from 'types';

//* Selectors
const selectApp = (state: RootState) => state.app;
const selectActiveTab = (state: RootState) => state.app.activeTab;
//* Actions
const setActiveTab = createAction<ActiveTab>('app/setActiveTab');
//* Thunks
// NOTE: Using createAsyncThunk to handle async actions with side effects.
const loadImages = createAsyncThunk('image/load', async () => {
  const response = await fetch('https://agencyanalytics-api.vercel.app/images.json');
  const images: Image[] = await response.json();
  const sortedImages = images.sort(
    (first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime(),
  );
  return sortedImages;
});

const initialState: AppReducerState = {
  activeTab: 'tab-recent',
  images: [],
  isLoading: false,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(setActiveTab, (state, { payload }) => {
      state.activeTab = payload;
    })
    .addCase(loadImages.pending, state => {
      state.isLoading = true;
    })
    .addCase(loadImages.fulfilled, (state, { payload }) => {
      state.images = payload;
      state.isLoading = false;
    })
    .addCase(loadImages.rejected, state => {
      state.isLoading = false;
    });
});

export { appReducer, loadImages, selectApp, selectActiveTab, setActiveTab };
