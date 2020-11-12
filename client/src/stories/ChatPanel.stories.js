import React from 'react';

import {ChatPanel} from "./chatPanel";

export default {
  title: 'Chat Panel',
  component: ChatPanel,
  argTypes: {
    currUser: {defaultValue: {"characterName":"T'k","id":"111","avatar":"t1e","isDM":false,"playerName":"Neta"}},
  }
};

const Template = (args) => <ChatPanel {...args} />;

export const chatPanel = Template.bind({});
