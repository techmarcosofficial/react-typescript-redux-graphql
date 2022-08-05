import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

// pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/Forgot-Password';
import ResetPassword from './pages/auth/Reset-Password';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Todos from './pages/Todos';
import Todo from './pages/Todos/Todo';
import Posts from './pages/Posts';
import Post from './pages/Posts/Post';
import AddPost from './pages/Posts/AddPost';
import EditPost from './pages/Posts/EditPost';

const client = new ApolloClient({        // 'https://flyby-gateway.herokuapp.com/',
  uri: process.env.REACT_APP_API_URL,    // specifies the URL of our GraphQL server.
  cache: new InMemoryCache(),            // Apollo Client uses to cache query results after fetching them.
  connectToDevTools: true
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<Todo />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/new-post" element={<AddPost />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
