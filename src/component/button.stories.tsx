import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Button text'
  }
};

export default meta;
