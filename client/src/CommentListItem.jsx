import React from 'react';

const CommentListItem = (props) => (
  <div>
    <span>{props.comments.id}</span>
    <span>{props.comments.recipeName}</span>
  </div>
)


export default CommentListItem;