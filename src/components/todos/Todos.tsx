import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTodos } from "../../services/todoService";
import { todosAction } from "../../actions";

const Todos = ({ todos }: any) => {
  return (
    <>
      <h4>Todos List</h4>
      <ul>
        {todos && todos.map((todo: any) => <li key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link></li>)}
      </ul>
    </>
  )
}

Todos.propTypes = {
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array,
}

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.todo.loading,
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch: any) => {
  getTodos().then((response) => dispatch(todosAction(response))).catch((error) => error);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);