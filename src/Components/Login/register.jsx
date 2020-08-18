import React from "react";
import dchannel from "./../../img/dchannel.png";
import { Link } from "react-router-dom";
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header1">Register</div>
        <div className="content">
          <div className="loginImage">
            <img src={dchannel} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/login">
            <button type="button" className="btn1">
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
