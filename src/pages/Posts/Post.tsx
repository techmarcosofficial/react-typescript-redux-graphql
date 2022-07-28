import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Header from "../../components/layout/Header/Header";
import { getPostById } from "../../services/postService";
import { _postAction } from "../../redux/actions";

const Post = ({ post }: any) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(parseInt(id)).then(
        (response) => dispatch(_postAction(response))).catch((error) => error);
    }
  }, []);
  
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="row">
              <p>ID : {post && post.id}</p>
              <p>Title: {post && post.title}</p>
              <p>Body: {post && post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Post.propTypes = {
  loading: PropTypes.bool.isRequired,
  post: PropTypes.object,
};

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.post.loading,
  post: state.post.post,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);