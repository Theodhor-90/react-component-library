import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Phone: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 18 32'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect
                x='1'
                y='1.75'
                width='16'
                height='28.5'
                rx='2'
                stroke={stroke}
                strokeWidth='2'
            />
            <path
                d='M8 5L9.77778 5'
                stroke={stroke}
                strokeWidth='2'
                strokeLinecap='round'
            />
        </svg>
    )
}
