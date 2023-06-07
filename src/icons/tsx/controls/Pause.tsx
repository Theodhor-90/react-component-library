import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Pause: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 6H6V18H10V6ZM18 6H14V18H18V6Z'
                fill={stroke}
            />
        </svg>
    )
}
