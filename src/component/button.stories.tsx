import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

type Story = StoryObj<typeof Button>;

export default {
  title: 'Components/Button',
  component: Button
} as Meta<typeof Button>;

export const DefaultButton: Story = {
  args: {
    text: 'Button text !'
  }
};
