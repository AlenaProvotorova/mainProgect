import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
    },
};

export const Clear: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
