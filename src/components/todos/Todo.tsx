import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getTodoById } from "../../services/todoService";
import { _todoAction } from "../../actions";

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
    <div className="row">
      <p>{todo && todo.title}</p>
      <p>{todo && todo.completed}</p>
    </div>
  )
}

Todo.propTypes = {
  loading: PropTypes.bool.isRequired,
  todo: PropTypes.object,
}

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.todo.loading,
  todo: state.todo.todo,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);