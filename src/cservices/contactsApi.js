import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/posts",
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url:"/posts",
        method:"POST",
        body:contact
      }),
      invalidatesTags: ["Contact"],
    }),
    editContact: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags: ["Contact"]
    }),
    deleteContact: builder.mutation({
      query: ({id}) => ({
        url:`/posts/${id}`,
        method:"DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    contact: builder.query({
      query:(id) => ({
        url: `/posts/${id}`,
       // method: "GET",
        providesTags: ["Contact"]
      }), 
    })
  })
})

export const {useContactsQuery, useAddContactMutation, useEditContactMutation,useDeleteContactMutation, useContactQuery} = contactsApi;