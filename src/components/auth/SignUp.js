import React, { Component } from "react";

class Sigup extends Component {
  render() {
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sigup;
