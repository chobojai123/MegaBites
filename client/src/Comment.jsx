import React from 'react';
import moment from 'moment';

const Comment = (props) => (
  
  <div className="comments">
    <div className="info">
      <img className='userImage' src={props.comment.userImage} alt='user'></img>
      <span className="fullName">{props.comment.fullName}</span>
      <span className='period'> · </span>
      <span className="address">{props.comment.city}, {props.comment.state}</span>
      <p className="commentsText">{props.comment.commentsText}</p>
    </div>
    <div>
      <button className="clickButton" onClick={() => {props.likeClicked(); {props.handleClick()}}}>{props.likeMsg}</button>
      <span className='period'> · </span>
      <a href='#'>Reply</a>
      <span className='period'> · </span>
      <span><i className="glyphicon glyphicon-thumbs-up"></i></span>
      <span className='likes'>{props.likes}</span>
      <span className='period'> · </span>
      <span className="date">{moment(new Date(props.comment.created_At)).fromNow()}</span>
    </div>
  </div>
)


export default Comment;