import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export const ChatPanel = ({ user, users, onLogin, onLogout, onCreateAccount }) => (
  <div className="wrapper">
    <div>
      {
        users.map(user => {
          return <div key={user.id}>{user.userName}</div>
        })
      }
    </div>
  </div>
);

ChatPanel.propTypes = {
  user: PropTypes.shape({}),
  users: PropTypes.arrayOf(PropTypes.shape({userName: PropTypes.string})).isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

ChatPanel.defaultProps = {
  user: null,
  users: [{"userName":"1o","id":"o6n","avatar":"t1e","isDM":true,"playerName":"ho9"},{"userName":"ebr","id":"stf","avatar":"jmv","isDM":false,"playerName":"3bp"},{"userName":"38s","id":"g5c","avatar":"qu","isDM":false,"playerName":"j9"}]
};
