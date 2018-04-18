import React from 'react';

const CommentListItem = (props) => (
  
  <div className="review">
    <div className="info">
      <img src={props.comment.image} alt='user'></img>
      <span>{props.comment.fullName}</span>
    </div>
    <p>{props.comment.commentsText}</p>
  </div>
)


export default CommentListItem;