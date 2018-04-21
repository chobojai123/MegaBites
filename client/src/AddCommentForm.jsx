import React from 'react';

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this.updateText = this.updateText.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateText(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    const { comment } = this.state;
    this.props.postComment({ comment });
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <img class="_1ci img" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.0.342.342/10401990_10202284489580545_4866479589637870884_n.jpg?_nc_cat=0&oh=1447b3389d760e727197876f958f604f&oe=5B5D1B2A" alt=""></img>
        <textarea placeholder="Add a comment..." onChange={this.updateText} value={this.state.comment} required />
        <button type="submit">Post</button>
      </form >
    );
  }
}

export default AddCommentForm;