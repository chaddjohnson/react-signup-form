import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Form = ({ className, title, children, onSubmit }) => {
  return (
    <Card title={title}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </Card>
  );
};

Form.propTypes = {
  title: PropTypes.node,
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit: () => {}
};

export default Form;
