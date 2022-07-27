import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducers';
import { postReducer } from './reducers/postReducers';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    post: postReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch