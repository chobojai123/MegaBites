import React from 'react';

const Header = (props) => (
  <div>
    <h3>Tips from Head Chefs</h3>
      <div className="header">
        <span className="commentsLength">{props.comments.length} Comments</span>
        <span className="top">Top</span>
        <span className="sortBy">Sort by</span>
        <div className="clearLine"></div>
      </div>
  </div>
)


export default Header;