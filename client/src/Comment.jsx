import React from 'react';

const Comment = (props) => (
  
  <div className="review">
    <div className="info">
      <img src={props.comment.userImage} alt='user'></img>
      <span>{props.comment.fullName}</span>
    </div>
    <p className="commentsText">{props.comment.commentsText}</p>
  </div>
)


export default Comment;