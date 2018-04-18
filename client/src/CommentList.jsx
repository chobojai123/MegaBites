import React from 'react';
import CommentListItem from './CommentListItem.jsx';
import AddCommentForm from './AddCommentForm.jsx';
import App from './App.jsx'

const CommentList = (props) => (
  <div className="comments">
    <div>{props.comments.length} Comments</div>
    <AddCommentForm addComment={props.addComment} />
    {props.comments.map((comment => <CommentListItem key={comment.id} comment={comment}/> ))}
  </div>  
)

export default CommentList;