import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import { icons } from '../../icons/IconIndex'

const iconsKeys = Object.keys(icons)

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        icon: { options: iconsKeys },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryButton: Story = {
    args: {
        mode: 'primary',
        text: 'Click me',
        disabled: false,
    },
}

export const SecondaryButton: Story = {
    args: {
        mode: 'secondary',
        text: 'Click me',
        disabled: false,
    },
}

export const GhostButton: Story = {
    args: {
        mode: 'ghost',
        text: 'Click me',
        disabled: false,
    },
}

export const DisabledButton: Story = {
    args: {
        mode: 'primary',
        text: 'Click me',
        disabled: true,
    },
}

export const ButtonWithIcon: Story = {
    args: {
        mode: 'primary',
        text: 'Click me',
        icon: 'ArrowRight',
    },
}
