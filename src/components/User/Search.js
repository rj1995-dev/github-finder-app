import React, { Component } from "react";
import PropTypes from "prop-types";
import "./user.css";
class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    // console.log(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            className="form-control text-style"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <div>
            <input
              type="submit"
              value="Search"
              className="btn btn-dark btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
