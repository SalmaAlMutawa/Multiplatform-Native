import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNavBar from "./Navigation/TopNavBar";
import AuthButton from "./AuthButton";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <p>
            Welcome to <strong>Website Name</strong>! We really hope you enjoy
            shopping with us
          </p>

          <Link to="/list">
            <button className="btn btn-info btn-lg">Start Shopping</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
