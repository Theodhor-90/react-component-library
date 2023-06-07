import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Play: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7 20L21 12L7 4L7 20Z'
                fill={stroke}
            />
        </svg>
    )
}
