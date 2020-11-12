import React from 'react';
import { Page } from './Page';

export default {
  title: 'Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;
export const gameViewPage = Template.bind({});
