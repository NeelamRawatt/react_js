import React from "react";
import { Link, Outlet } from "react-router-dom";
const Nested = () => {
  return (
    <>
      <Outlet>
        <h1> THIS IS NESTED PAGE</h1>
        <nav>
          <Link to="/nested/profile">Profile</Link>
          <Link to="/nested/account">Account</Link>
        </nav>
      </Outlet>
    </>
  );
};

export default Nested;
