import Anchor from '../anchor/Anchor'
import { TAccordionElement } from './Accordion'

const AnchorElement = (
    <Anchor
        text='Lore ipsum dolores sit amet'
        destination='#'
    />
)

export const textOnlyElements: TAccordionElement[] = [
    {
        title: 'Lore Ipsum 1',
        content: 'Lore ipsum dolores sit amet',
    },
    {
        title: 'Lore Ipsum 2',
        content: 'Lore ipsum dolores sit amet',
    },
    {
        title: 'Lore Ipsum 3',
        content: 'Lore ipsum dolores sit amet',
    },
    {
        title: 'Lore Ipsum 4',
        content: 'Lore ipsum dolores sit amet',
    },
]
export const textAndNodeElements: TAccordionElement[] = [
    {
        title: 'Lore Ipsum 1',
        content: AnchorElement,
    },
    {
        title: 'Lore Ipsum 2',
        content: AnchorElement,
    },
    {
        title: 'Lore Ipsum 3',
        content: AnchorElement,
    },
    {
        title: 'Lore Ipsum 4',
        content: AnchorElement,
    },
]
