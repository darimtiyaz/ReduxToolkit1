import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if(response.ok){
    return response.json()
  }}
  );

export const getPost = createAsyncThunk("posts/fetchPost", async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(response.ok){
   return response.json()
  }}
  );

export const deletePost = createAsyncThunk(
  "posts/deletePosts",
  async ({ id, dispatch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    if(response.ok){
      dispatch(getPosts())
      //return response.json();
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ data }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
    });
    if(response.ok){
      return response.json;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, title, body }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        body
      }),
    });
    if(response.ok){
      return response.json();
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: builder =>{
    builder
    .addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
    })
    .addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      //state.posts = action.payload;
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(getPost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(getPost.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(createPost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    })
    .addCase(createPost.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(updatePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    })
    .addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
    })
  }
});

export default postSlice.reducer;
