import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'
import placeholder from '../../assets/placeholderImage.png'

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: { options: ['sm', 'md'], control: 'select' },
    },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarRegular: Story = {
    args: {
        size: 'md',
        image: placeholder,
    },
}

export const AvatarSmall: Story = {
    args: {
        size: 'sm',
        image: placeholder,
    },
}
