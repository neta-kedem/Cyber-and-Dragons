import React from 'react';
import PropTypes from 'prop-types';

import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
     
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
