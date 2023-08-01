import type { Meta, StoryObj } from '@storybook/react'
import Divider from './Divider'

const meta = {
    title: 'Components/Divider',
    component: Divider,
    tags: ['autodocs'],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const DividerRegular: Story = {
    args: {
        direction: 'horizontal',
        visible: true,
    },
}

export const DividerInvisible: Story = {
    args: {
        direction: 'horizontal',
        visible: false,
    },
}
