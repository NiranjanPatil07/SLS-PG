import { configureStore } from '@reduxjs/toolkit';
import versionControl from '../reducers/guardrail';
import { guardrailApi } from './slice';

export const store = configureStore({
  reducer: {
    // reducer for slice goes here
    assetVersionControl: versionControl,
    [guardrailApi.reducerPath]: guardrailApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }).concat([guardrailApi.middleware]),
  devTools: true,
});

export default store;
