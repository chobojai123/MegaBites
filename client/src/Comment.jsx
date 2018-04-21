import React from 'react';

const Comment = (props) => (
  
  <div className="comments">
    <div className="info">
      <img id='userImage' src={props.comment.userImage} alt='user'></img>
      <span className="fullName">{props.comment.fullName}</span>
      <p className="commentsText">{props.comment.commentsText}</p>
    </div>
    <div>
      <button className="clickButton" onClick={() => {props.likeClicked()}}>{props.likeMsg}</button>
      <span className='period'> · </span>
      <a href='#'>Reply</a>
      <span className='period'> · </span>
      <span><i className="glyphicon glyphicon-thumbs-up"></i></span>
      <span className='likes'>{props.likes}</span>
    </div>
  </div>
)


export default Comment;