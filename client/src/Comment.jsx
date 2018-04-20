import React from 'react';

const Comment = (props) => (
  
  <div className="comments">
    <div className="info">
      <img id='userImage' src={props.comment.userImage} alt='user'></img>
      <span className="fullName">{props.comment.fullName}</span>
      <p className="commentsText">{props.comment.commentsText}</p>
    </div>
  </div>
)


export default Comment;