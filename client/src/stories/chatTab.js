import React from 'react'
import PropTypes from 'prop-types'
import "./chatTab.css"

export const ChatTab = ({talkToUser, messages, isActive}) => (
  <div className={`chatTab ${isActive? "active" : ""}`}>
      <div key={talkToUser} className="circle">
        <div className="characterName">{talkToUser.characterName}
        </div>
      </div>
  </div>
);

ChatTab.propTypes = {
  talkToUser: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  isActive: PropTypes.bool
};
