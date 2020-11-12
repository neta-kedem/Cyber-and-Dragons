import React from 'react'
import {ChatTab} from "./chatTab";

export default {
  title: 'A Single Chat Tab',
  component: ChatTab,
  argTypes: {
    talkToUser: {defaultValue: {"characterName":"GM","id":"112","avatar":"","isDM":true,"playerName":"Omri"}},
    messages: {defaultValue: []},
    isActive: {defaultValue: false}
  }
};

const Template = (args) => <ChatTab {...args} />;
export const chat = Template.bind({});
