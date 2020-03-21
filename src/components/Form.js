import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Form = ({ className, title, children }) => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <Card title={title}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </Card>
  );
};

Form.propTypes = {
  title: PropTypes.node
};

export default Form;
