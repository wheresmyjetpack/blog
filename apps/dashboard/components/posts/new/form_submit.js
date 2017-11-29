import React from 'react';

class SubmitPostButton extends React.Component {
  componentDidMount() {
    this.props.autoSave();
  }

  componentWillUnmount() {
    this.props.clearAutoSave();
  }

  render() {
    const feedbackClasses = ['text-success', 'post-feedback'];
    const spinnerClasses = ['fa-spin', 'fa', 'fa-lg', 'fa-spinner'];
    const buttonClasses = ['btn', 'btn-primary', 'mr-3'];

    if (this.props.hide) { feedbackClasses.push('hide'); }
    if (!this.props.showLoading) { spinnerClasses.push('d-none'); }
    if (!this.props.enabled) {
      let index = buttonClasses.indexOf('btn-primary');
      buttonClasses.splice(index, 1);
      buttonClasses.push('btn-outline-secondary');
    }

    return (
      <div>
      <button className={buttonClasses.join(' ')} type="submit" disabled={!this.props.enabled}
              onClick={(e) => { e.preventDefault(); this.props.savePost(); }}>
      <i className="fa fa-save"></i> Save
      </button>
      <i className={spinnerClasses.join(' ')}></i>
      <small className={feedbackClasses.join(' ')}>{this.props.postAlert}</small>
      </div>
    );
  }
}

export default SubmitPostButton;
