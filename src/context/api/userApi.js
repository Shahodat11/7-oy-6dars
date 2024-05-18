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
    deleteUser:build.mutation({
      query:(id)=>({
        url:`/users/${id}`,
        method:"DELETE"
      }),
      invalidatesTags: ["User"]
    })
  }),
})

export const {
  useGetUsersQuery,
  useDeleteUserMutation
} = productApi