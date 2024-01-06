import { quizApi } from "@/redux/api/apiSlice";

const quizResultApi = quizApi.injectEndpoints({
  endpoints: (builder) => ({
    createPerformerResult: builder.mutation({
      query: (data) => ({
        url: "/results/create-result",
        method: "POST",
        body: data,
      }),
    }),
    getMyResult: builder.query({
      query: () => `/results/my-result`,
    }),
  }),
});

export const { useCreatePerformerResultMutation, useGetMyResultQuery } =
  quizResultApi;
