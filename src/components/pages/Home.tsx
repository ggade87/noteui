import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state: any) => state.pages);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_PAGE", payload: "home" });
  };

  return (
    <div>
      <h1>Welcome to Home!</h1>
      <button onClick={handleToggle}>Toggle Home</button>
    </div>
  );
};

export default Home;
