import type { Meta, StoryObj } from '@storybook/react'
import Media from './Media'
import placehoder from '../../assets/placeholderImage.png'

const meta = {
    title: 'Components/Media',
    component: Media,
    tags: ['autodocs'],
    argTypes: {
        media: {
            mapping: {
                first: {
                    type: 'image',
                    src: placehoder,
                },
                second: {
                    type: 'video',
                    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                },
            },
            control: {
                type: 'select',
                labels: {
                    first: 'Image',
                    second: 'Video',
                },
            },
            options: ['first', 'second'],
        },
    },
} satisfies Meta<typeof Media>

export default meta
type Story = StoryObj<typeof meta>

export const MediaImage: Story = {
    args: {
        media: {
            type: 'image',
            src: placehoder,
        },
        alt: 'Blank Image',
        aspectRatio: '16-9',
    },
}

export const MediaVideo: Story = {
    args: {
        media: {
            type: 'video',
            src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        },

        alt: '',
        aspectRatio: '16-9',
    },
}
