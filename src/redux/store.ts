import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import { todoReducer } from './reducers/todoReducer';
import { postReducer } from './reducers/postReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    todo: todoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch