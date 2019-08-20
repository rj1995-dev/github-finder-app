import React from "react";
import "./repos.css";
import PropTypes from "prop-types";
const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h4>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h4>
    </div>
  );
};
RepoItem.propTypes = { repo: PropTypes.object.isRequired };
export default RepoItem;
