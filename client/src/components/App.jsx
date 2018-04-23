import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Comment from './Comment.jsx';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    let parsed = queryString.parse(location.search);
    let currentId = Number(parsed.id);
    if (currentId) {
      this.getComments(Number(currentId));
    } else {
      this.getComments(1);
    }
  }

  getComments(id) {
    axios.get(`http://127.0.0.1:5000/recipe/${id}`)
    .then(comment => this.setState({comments: comment.data[0].comments}))
    .catch(err => console.log(err))
  }
  
  postComment(comment) {
    axios.post('/recipe/:id', comment)
      .then(comment => this.getComments)
      .catch(err => console.log(err) )
  }

  render() {
    return (
      <div className="app">
        <section className="section">
          <div className="tips">
            <Header comments={this.state.comments}/>
            <AddCommentForm postComment={this.postComment}/>
            <CommentList comments={this.state.comments}/>
          </div>
            <About/>
        </section>
      </div>
    );
  }
}

export default App;