import React from 'react';
import PostTitle from './form_title'
import PostBody from './body'
import Submit from './form_submit'

import './index.scss'

export default class BlogPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideTitleInput: false,
      savePostEnabled: false,
      postTitle: '',
      postBody: '',
      hideAlert: false,
      showLoading: false
    };
  }

  autoSaveTimer() {
    this.timer = setInterval(() => {
      if (this.state.savePostEnabled) { this.savePost(); }
    }, 60000)
  }

  clearTimer() {
    clearInterval(this.timer);
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

  savePost() {
    this.clearAlertText();

    $.ajax({
      url: this.props.action,
      method: 'POST',
      data: this.gatherFormData(),
      beforeSend: this.toggleLoadingIcon.bind(this)
    }).done(this.handleResponse.bind(this));
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
          background={this.backgroundTitle.bind(this)}
          foreground={this.foregroundTitle.bind(this)}
          postTitle={this.state.postTitle}
          update={this.updateTitle.bind(this)}
        />
        <PostBody text={this.state.postBody} handleChange={this.updateBody.bind(this)} />
        <Submit hide={this.state.hideAlert}
                autoSave={this.autoSaveTimer.bind(this)}
                clearAutoSave={this.clearTimer.bind(this)}
                savePost={this.savePost.bind(this)}
                enabled={this.state.savePostEnabled}
                showLoading={this.state.showLoading}
                postAlert={this.state.postAlert}/>
      </form>
    );
  }
}

