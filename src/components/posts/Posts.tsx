import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/layout/Header/Header";
import { getPosts } from "../../services/postService";
import { postsAction } from "../../redux/actions";

const Posts = (props: any) => {
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-2">Posts List</h2>
              <ul>
                {props.posts &&
                  props.posts.map(
                    (post: any) => <li key={post.id}>
                      <Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
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
}

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.post.loading,
  posts: state.post.posts,
})

const mapDispatchToProps = (dispatch: any) => {
  getPosts().then((response) => {
    dispatch(postsAction(response));
  }).catch((error) => error);
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);