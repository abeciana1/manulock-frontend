import React from 'react';
import PropTypes from 'prop-types';

export const DashboardLayout = ({ children }) => {
  return (
    <section className="px-5 sm:px-10 py-3 max-w-[1440px] mx-auto">
      {children}
    </section>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
