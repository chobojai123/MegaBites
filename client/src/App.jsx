import React from 'react';
import axios from 'axios';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import About from './About.jsx';
import Header from './Header.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  // testing with a recipe ID
  componentDidMount() {
    this.getComments(2);
  }


  getComments(id) {
    axios.get(`/recipe/${id}`)
    .then(comment => this.setState({comments: comment.data[0].comments}))
    .catch(err => console.log(err))
  }
  
// add comment function is still in progress *stretch goal
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