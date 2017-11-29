import React from 'react';
import ReactQuill from 'react-quill';

const PostBody = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="post-body"><small><em>Body</em></small></label>
      <ReactQuill value={props.text}
                  id="post-body"
                  onChange={props.handleChange} />
      <input type="hidden" value={props.text} name="post[] body" />
    </div>
  );
}

export default PostBody;
