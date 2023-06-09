import type { Meta, StoryObj } from '@storybook/react'
import Anchor from './Anchor'
import { icons } from '../../icons/IconIndex'

const iconKeys = Object.keys(icons)

const meta = {
    title: 'Components/Anchor',
    component: Anchor,
    tags: ['autodocs'],
    argTypes: {
        iconName: { options: iconKeys, control: 'select' },
    },
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

export const AnchorRegular: Story = {
    args: {
        destination: '#',
        text: 'Call-toaction',
        iconName: 'ArrowRight',
    },
}

export const AnchorDisabled: Story = {
    args: {
        destination: '#',
        text: 'Call-toaction',
        iconName: 'ArrowRight',
        disabled: true,
    },
}
