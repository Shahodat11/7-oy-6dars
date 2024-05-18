import { api } from '.'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({ 
        url: '/users', 
      }),
      providesTags:["User"]
    }),
  }),
})

export const {
  useGetUsersQuery,
} = productApi