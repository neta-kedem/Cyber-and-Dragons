import React from 'react';

import {ChatPanel} from "./chatPanel";

export default {
  title: 'Chat Panel',
  component: ChatPanel,
};

const Template = (args) => <ChatPanel {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
