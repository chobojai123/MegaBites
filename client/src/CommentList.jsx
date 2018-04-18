import React from 'react';
import CommentListItem from './CommentListItem.jsx';
import AddCommentForm from './AddCommentForm.jsx';
import App from './App.jsx'

const CommentList = (props) => (
  <div className="comments">
    {props.comments.map((comment, i) => <CommentListItem key={i} comment={comment}/> )}
  </div>  
)

export default CommentList;
