import React from 'react';

const SubmitPostButton = (props) => {
  return <button className="btn btn-primary" type="submit" disabled={!props.enabled}>Save</button>;
}

export default SubmitPostButton;
