import type { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'
import { textAndNodeElements, textOnlyElements } from './Accordion.mocks'

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const AccordionRegular: Story = {
    args: {
        elements: textOnlyElements,
        multiSelectable: false,
        id: '0',
    },
}

export const AccordionRegularNode: Story = {
    args: {
        elements: textAndNodeElements,
        multiSelectable: false,
        id: '1',
    },
}
export const AccordionMultiNode: Story = {
    args: {
        elements: textAndNodeElements,
        multiSelectable: true,
        id: '1',
    },
}
