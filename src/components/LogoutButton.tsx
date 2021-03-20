import React from "react";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const { push } = useHistory();
  const handleClick = () => {
    window.localStorage.clear();
    setTimeout(() => {
      push("/signin");
    }, 500);
  };

  return <button onClick={handleClick}>Logout </button>;
};

export default LogoutButton