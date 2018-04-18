import React from 'react';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import axios from 'axios';
import About from './About.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComment = this.getComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  // testing with a recipe ID
  componentDidMount() {
    this.getComment(2);
  }


  getComment(id) {
    axios.get(`/recipe/${id}`)
    .then(comment => this.setState({comments: comment.data[0].comments}))
    .catch(err => console.log(err))
  }

// add comment function is still in progress *stretch goal
  addComment(comment) {
    axios.post('/recipe/:id', comment)
      .then(comment => this.getComment)
      .catch(err => console.log(err) )
  }


  render() {
    return (
      <div className="app">
        <section className="section">
          <div className="tips">
            <h3>Tips from Head Chefs</h3> 
            <div><b>{this.state.comments.length} Comments</b></div>
            <AddCommentForm addComment={this.addComment}/>
            <CommentList comments={this.state.comments}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;