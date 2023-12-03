import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as BASE_URL from '../../config/config';

// this component is the base endpoint through which all other end points are called

export const guardrailApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // THIS IS THE BASE ENDPOINT COMING FROM THE CONFIG FILE
    baseUrl: BASE_URL.CONFIG.Base_URL,
    // This function takes in headers
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.authDetails?.details?.data?.token ?? 'ABCD-1234';
      headers.set('authorization', `Bearer ${token ? token : 'token not found'}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
