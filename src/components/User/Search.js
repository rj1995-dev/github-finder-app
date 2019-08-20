import React, { Component } from "react";
import PropTypes from "prop-types";
import "./user.css";
class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      // console.log(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
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
        <div className="btn-clear">
          {showClear && (
            <button className="btn btn-info btn-block " onClick={clearUsers}>
              Clear
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
