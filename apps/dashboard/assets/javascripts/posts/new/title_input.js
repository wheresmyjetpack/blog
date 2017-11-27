import React from 'react';

export default class TitleInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  focusToEnd(e) {
    let value = e.target.value;
    e.target.value = '';
    e.target.value = value;
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="title" className="mr-sm-2"><small>Post Title</small></label>
        <
          input
          type="text"
          className="form-control mr-sm-2"
          id="title"
          onBlur={this.props.background}
          onChange={this.props.update}
          onFocus={this.focusToEnd}
          value={this.props.postTitle}
          ref={(input) => { this.textInput = input }}
        />
      </div>
    );
  }
}

