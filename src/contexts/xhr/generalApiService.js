import { versionControlApi } from '../store/slice';

export const generalApiService = versionControlApi.injectEndpoints({
  endpoints: (builder) => ({
    getRequest: builder.query({
      query: (getQuery) => ({
        url: getQuery,
      }),
    }),

    // saveCurrentVersion: builder.mutation({
    //   query: (payload) => ({
    //     url: '/saveCurrentVersion',
    //     method: 'POST',
    //     body: payload,
    //   }),
    // }),
  }),
});
export const { useGetRequestQuery } = generalApiService;
