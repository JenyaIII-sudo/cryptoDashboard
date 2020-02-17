import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../App/AppProvider';

export default function Page({ name, children }) {
  const context = useContext(AppContext);
  const { page } = context;

  if (page.page !== name) {
    return null;
  }
  return <div>{children}</div>;
}


Page.defaultProps = {
  children: [],
  name: '',
};

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};
