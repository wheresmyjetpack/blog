import React from 'react';
import PostTitle from './form_title'

export default class BlogPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundTitle = this.backgroundTitle.bind(this);
    this.foregroundTitle = this.foregroundTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.state = {
      hideTitleInput: false,
      postTitle: ''
    };
  }

  render() {
    return (
      <FormBody
        backgroundTitle={this.backgroundTitle}
        foregroundTitle={this.foregroundTitle}
        hideTitleInput={this.state.hideTitleInput}
        postTitle={this.state.postTitle}
        updateTitle={this.updateTitle}
      />
    );
  }

  backgroundTitle(e) {
    if (this.state.postTitle !== '') {
      this.setState((prevState, props) => ({
        hideTitleInput: !prevState.hideTitleInput
      }));
    }
  }

  foregroundTitle(e) {
    this.setState((prevState, props) => ({
      hideTitleInput: !prevState.hideTitleInput
    }));
  }

  updateTitle(e) {
    this.setState({ postTitle: e.target.value });
  }
}

function FormBody(props) {
  return (
    <form className="form-inline">
      <
        PostTitle
        hide={props.hideTitleInput}
        background={props.backgroundTitle}
        foreground={props.foregroundTitle}
        postTitle={props.postTitle}
        update={props.updateTitle}
      />
    </form>
  );
}
