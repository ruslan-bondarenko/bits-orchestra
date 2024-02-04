import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {headerAction, reviewsAction} from '@/base/store';

const useHeaderActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(headerAction, dispatch);
};

const useReviewsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(reviewsAction, dispatch);
};

export {useHeaderActions, useReviewsActions};
