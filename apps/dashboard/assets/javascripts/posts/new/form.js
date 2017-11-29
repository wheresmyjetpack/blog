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
    this.savePost = this.savePost.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.toggleLoadingIcon = this.toggleLoadingIcon.bind(this);
    this.state = {
      hideTitleInput: false,
      savePostEnabled: false,
      postTitle: '',
      postBody: '',
      hideAlert: false,
      showLoading: false
    };
  }

  backgroundTitle(e) {
    if (this.state.postTitle !== '') {
      this.setState({ hideTitleInput: true });
    }
  }

  foregroundTitle(e) {
    this.setState({ hideTitleInput: false });
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

  savePost(e) {
    e.preventDefault();
    this.clearAlertText();

    $.ajax({
      url: this.props.action,
      method: 'POST',
      data: this.gatherFormData(),
      beforeSend: this.toggleLoadingIcon
    }).done(this.handleResponse);
  }

  handleResponse(response) {
    this.toggleLoadingIcon();
    let updates = {};

    if (this.state.id === undefined) {
      updates.id = JSON.parse(response).id;
    }

    updates.postAlert = 'Post successfully saved';
    this.setState(updates);
    this.fadeOutAlert();
  }

  toggleLoadingIcon() {
    this.setState((prevState, props) => {
      return {
        showLoading: !prevState.showLoading,
        savePostEnabled: !prevState.savePostEnabled
      };
    });
  }

  clearAlertText() {
    this.setState({ hideAlert: false, postAlert: '' });
  }

  fadeOutAlert() {
    setTimeout(() => {
      this.setState({ hideAlert: true });
    }, 2000);
  }

  gatherFormData() {
    return {
      _csrf_token: this.props.token,
      post: {
        title: this.state.postTitle,
        body: this.state.postBody,
        id: this.state.id
      }
    }
  }

  render() {
    return (
      <form id="post-form" className="form-control p-4">
        <
          PostTitle
          hide={this.state.hideTitleInput}
          background={this.backgroundTitle}
          foreground={this.foregroundTitle}
          postTitle={this.state.postTitle}
          update={this.updateTitle}
        />
        <PostBody text={this.state.postBody} handleChange={this.updateBody} />
        <Submit hide={this.state.hideAlert}
                savePost={this.savePost}
                enabled={this.state.savePostEnabled}
                showLoading={this.state.showLoading}
                postAlert={this.state.postAlert}/>
      </form>
    );
  }
}

