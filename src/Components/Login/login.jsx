import React from "react";
import dchannel from "./../../img/dchannel.png";
import "./style.scss";
import { Link } from "react-router-dom";
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header1">Login</div>
        <div className="content">
          <div className="loginImage">
            <br />
            <img src={dchannel} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/">
            <button type="button" className="btn1">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
