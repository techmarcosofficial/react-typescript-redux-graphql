import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Header from "../../components/layout/Header/Header";
import { getTodoById } from "../../services/todoService";
import { _todoAction } from "../../redux/actions";

const Todo = ({ todo }: any) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodoById(
        parseInt(id)).then((response) => dispatch(
          _todoAction(response))).catch((error) => error);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="row">
              <p>{todo && todo.title}</p>
              <p>{todo && todo.completed}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Todo.propTypes = {
  loading: PropTypes.bool.isRequired,
  todo: PropTypes.object,
};

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.todo.loading,
  todo: state.todo.todo
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);