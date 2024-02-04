import { IReview } from '@/shared/types';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { mockReviews } from '@mock-tool/someMockFiles';

export type ReviewsStateType = {
  visibleReviews: number;
  reviewsData: IReview[];
};

const initialState: ReviewsStateType = {
  visibleReviews: 2,
  reviewsData: mockReviews,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addVisibleReviews: (state) => {
      state.visibleReviews += 2;
    },
    addReview: (state, action: PayloadAction<IReview>) => {
      if (!state.reviewsData.find((review) => review.id === action.payload.id)) {
        state.reviewsData.push(action.payload);
      }
    },
    removeReviewById: (state, action: PayloadAction<string>) => {
      state.reviewsData = [
        ...state.reviewsData.filter(
          (review) => review.id !== action.payload,
        ),
      ];
    },
  },
});
export const reviewsAction = reviewsSlice.actions;

export default reviewsSlice.reducer;
