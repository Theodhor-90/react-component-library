import type { Meta, StoryObj } from '@storybook/react'

import Icon from './IconComponent'
import { icons } from '../../icons/IconIndex'
import IconsDemo from './IconsDemo'

const iconsKeys = Object.keys(icons)

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        iconName: { options: iconsKeys, control: 'select' },
        stroke: { control: 'color' },
    },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const IconXs: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'xs',
    },
}
export const IconSm: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'sm',
    },
}
export const IconMd: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'md',
    },
}
export const IconLg: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'lg',
    },
}
export const IconXl: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'xl',
    },
}
export const IconXxl: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'black',
        fill: 'none',
        size: 'xxl',
    },
}
export const IconMdRed: Story = {
    args: {
        iconName: 'ArrowDown',
        stroke: 'red',
        fill: 'none',
        size: 'md',
    },
}

export const IndexOfIcons = () => <IconsDemo />
