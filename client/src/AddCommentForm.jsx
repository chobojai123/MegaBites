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
        <textarea placeholder="Add a comment..." onChange={this.updateText} value={this.state.comment} required />
        <button type="submit">Post</button>
      </form >
    );
  }
}

export default AddCommentForm;