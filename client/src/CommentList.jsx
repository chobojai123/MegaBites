import React from 'react';
import Comment from './Comment.jsx';
import AddCommentForm from './AddCommentForm.jsx';
import App from './App.jsx'

const CommentList = (props) => (
  <div>
    {props.comments.map((comment, i) => <Comment key={i} comment={comment} likes={props.likes} likeClicked={props.likeClicked} likeMsg={props.likeMsg}/>)}
  </div>  
)

export default CommentList;
