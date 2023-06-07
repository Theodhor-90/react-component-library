import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
    base: 'light', // this will inherit the base properties of Storybooks'light theme

    colorSecondary: '#45bc5a', // Chateau Green

    appBg: '#F6F9FC',
    appContentBg: '#FFFFFF',
    appBorderColor: 'rgba(0,0,0,.1)',
    appBorderRadius: 4,

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    textColor: '#333333',
    textInverseColor: '#FFFFFF',
    textMutedColor: '#666666',

    barTextColor: '#999999',
    barSelectedColor: '#45bc5a',
    barBg: '#FFFFFF',

    inputBg: '#FFFFFF',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: '#333333',
    inputBorderRadius: 4,

    brandTitle: 'Newline Storybook',
    brandUrl: 'https://newline.co',
    brandImage: './favicon.ico',
})

addons.setConfig({
    theme,
})
