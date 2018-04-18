import React from 'react';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComment = this.getComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getComment(2);
  }


  getComment(id) {
    axios.get(`/recipe/${id}`)
    .then(comment => this.setState({ comments: comment }))
    .catch(err => console.log(err))
  }


  addComment(comment) {
    axios.post('/recipe/:id', comment)
      .then(comment => console.log('hi'))
      .catch(err => console.log(err) )
  }


  render() {
    return (
      <div className="app">
        <h1>Tips from Head Chefs</h1> 
        <CommentList comments={this.state.comments}/>
        {/* <AddCommentForm addComment={this.addComment}/> */}
      </div>
    );
  }
}

export default App;