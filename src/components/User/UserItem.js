import React, { Component } from "react";
import "./user.css";
class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center d-block my-2">
        <img
          src={avatar_url}
          alt="person"
          className="rounded-circle my-3"
          style={{ width: "60px" }}
        />
        <h5>{login}</h5>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-3">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
