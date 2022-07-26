import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>Welcome to Home</h2>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </>
  )
}

export default Home;