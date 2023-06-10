import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'
import { icons } from '../../icons/IconIndex'

const iconKeys = Object.keys(icons)

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxRegular: Story = {
    args: {
        text: 'Remember Me',
        id: '0',
        name: 'test',
        onChange: () => {},
    },
}

export const CheckboxDisabled: Story = {
    args: {
        text: 'Remember Me',
        id: '0',
        name: 'test',
        onChange: () => {},
        disabled: true,
    },
}
