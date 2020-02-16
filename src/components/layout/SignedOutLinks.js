import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
  <div>
    <ul className="right">
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  </div>
  )
}

export default SignedOutLinks;
