import React from 'react';
import PropTypes from 'prop-types';

export const DashboardLayout = ({ children }) => {
  return <section className="px-10 py-3">{children}</section>;
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
