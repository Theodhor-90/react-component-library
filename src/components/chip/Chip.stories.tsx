import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'

const meta = {
    title: 'Components/Chip',
    component: Chip,
    tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const ChipRegular: Story = {
    args: {
        text: 'Click Me',
    },
}

export const ChipDisabled: Story = {
    args: {
        text: 'Click Me',
        disabled: true,
    },
}
