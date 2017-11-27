import React from 'react';
import PostTitle from './form_title'
import PostBody from './body'
import Submit from './form_submit'

export default class BlogPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundTitle = this.backgroundTitle.bind(this);
    this.foregroundTitle = this.foregroundTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.state = {
      hideTitleInput: false,
      savePostEnabled: false,
      postTitle: '',
      postBody: ''
    };
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
    let updates = { postTitle: e.target.value }
    if (updates.postTitle === '')  {
      updates.savePostEnabled = false;
    } else {
      updates.savePostEnabled = true;
    }

    this.setState(updates);
  }

  updateBody(value) {
    this.setState({ postBody: value });
  }

  render() {
    return (
      <form className="form-control" action={this.props.action} method="POST">
        <input type="hidden" name="_csrf_token" value={this.props.token} />
        <
          PostTitle
          hide={this.state.hideTitleInput}
          background={this.backgroundTitle}
          foreground={this.foregroundTitle}
          postTitle={this.state.postTitle}
          update={this.updateTitle}
        />
        <PostBody text={this.state.postBody} handleChange={this.updateBody} />
        <Submit enabled={this.state.savePostEnabled} />
      </form>
    );
  }
}

