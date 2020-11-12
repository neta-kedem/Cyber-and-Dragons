import React from 'react'
import PropTypes from 'prop-types'
import "./chatPanel.css"
import {ChatTab} from "./chatTab"

export const ChatPanel = ({ currUser, users, activeChatTab }) => (
  <div className="chatPanel">
    <div className="chatTabs">
      {
        users.map(talkToUser => {
          return <ChatTab key={talkToUser.id} talkToUser={talkToUser} isActive={talkToUser.isActive} messages={[]}/>
        })
      }
    </div>
    <div className="messageBoard"></div>
  </div>
);

ChatPanel.propTypes = {
  currUser: PropTypes.shape({}),
  users: PropTypes.arrayOf(PropTypes.shape({userName: PropTypes.string})).isRequired,
  activeChatTab: PropTypes.string
};

ChatPanel.defaultProps = {
  users: [{"characterName":"TC","id":"o6n","avatar":"t1e","isDM":true,"playerName":"first", "isActive": true},{"characterName":"GM","id":"stf","avatar":"jmv","isDM":false,"playerName":"second"},{"characterName":"YY","id":"g5c","avatar":"qu","isDM":false,"playerName":"third"}]
};
