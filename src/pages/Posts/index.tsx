import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import Header from "../../components/layout/Header/Header";
// import { getPosts } from "../../services/postService";
// import { postsAction } from "../../redux/actions";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphql/query";
import { useMutation } from '@apollo/client';
import { DELETE_POST } from "../../graphql/mutation";

const Posts = (props: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: (res): void => {
      if (res.deletePost) {
        window.location.href = '/posts';
      }
    },
    onError: (err): void => {
      console.log('Delete post error: ', err.message);
    },
  });
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!user) {
    window.location.href = "/login";
  }
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <Link to="/new-post">New Post</Link>
            <h2 className="text-center text-3xl md:text-4xl font-medium mb-2">Posts List</h2>
            <ul className="text-center">
              {data.posts &&
                data.posts.map(
                  (post: any) => <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => {
                      var result = window.confirm("Press button");
                      if (result) {
                        deletePost({ variables: { id: post.id } });
                      }
                    }}>Delete</button>
                  </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.array,
};

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.post.loading,
  posts: state.post.posts
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);