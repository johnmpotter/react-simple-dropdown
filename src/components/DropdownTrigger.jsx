import React, { createClass, PropTypes } from 'react';

const DropdownTrigger = createClass({
  displayName: 'DropdownTrigger',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  getDefaultProps () {
    return {
      className: ''
    };
  },

  render () {
    const { children, className } = this.props;
    const props = {
      ...this.props,
      className: `dropdown__trigger ${className}`
    };

    return (
      <div {...props} href="#dropdown-trigger">
        {children}
      </div>
    );
  }
});

export default DropdownTrigger;
