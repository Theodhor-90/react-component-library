import type { Meta, StoryObj } from '@storybook/react'
import Tab from './Tab'

const meta = {
    title: 'Components/Tab',
    component: Tab,
    tags: ['autodocs'],
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const TabRegular: Story = {
    args: {
        title: 'Tab',
        content: 'Lorem ipsum dolorem sit amet',
        active: false,
        horizontal: true,
    },
}

export const TabActive: Story = {
    args: {
        title: 'Tab',
        content: 'Lorem ipsum dolorem sit amet',
        active: true,
        horizontal: false,
    },
}
