import type { Meta, StoryObj } from '@storybook/react'
import Control from './Control'

const meta = {
    title: 'Components/Control',
    component: Control,
    tags: ['autodocs'],
} satisfies Meta<typeof Control>

export default meta
type Story = StoryObj<typeof meta>

export const ControlRegular: Story = {
    args: {
        icon: 'play',
    },
}

export const ControlDisabled: Story = {
    args: {
        icon: 'play',
        disabled: true,
    },
}
