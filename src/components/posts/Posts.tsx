import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../services/postService";
import { postsAction } from "../../actions";

const Posts = (props: any) => {
  return (
    <>
      <h4>Posts List</h4>
      <ul>
        {props.posts &&
          props.posts.map(
            (post: any) => <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
        }
    </ul>
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