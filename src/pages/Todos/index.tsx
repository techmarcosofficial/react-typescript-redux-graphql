import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/layout/Header/Header";
import { getTodos } from "../../services/todoService";
import { todosAction } from "../../redux/actions";

const Todos = ({ todos }: any) => {
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-2">Todos List</h2>
            <ul>
              {todos && todos.map((todo: any) => <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Todos.propTypes = {
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array,
};

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
  loading: state.todo.loading,
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch: any) => {
  getTodos().then((response) => dispatch(todosAction(response))).catch((error) => error);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);