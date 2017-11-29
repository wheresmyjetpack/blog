import React from 'react';

const TitleDisplay = (props) => {
  return (
    <div className="mt-3 mb-4">
      <span onClick={props.foreground}>
        <span className="h2 mr-2">{props.postTitle}</span>
        <input type="hidden" value={props.textValue} name="post[title]" />
        <i className="fa fa-pencil-square-o"></i>
      </span>
    </div>
  );
}

export default TitleDisplay;
