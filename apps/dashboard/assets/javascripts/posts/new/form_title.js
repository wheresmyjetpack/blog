import React from 'react';
import TitleInput from './title_input'
import TitleDisplay from './title_display'

const PostTitle = (props) => {
  if (!props.hide) {
    return <TitleInput background={props.background} update={props.update} postTitle={props.postTitle} />;
  } else {
    return <TitleDisplay foreground={props.foreground} postTitle={props.postTitle} />;
  }
}

export default PostTitle;
