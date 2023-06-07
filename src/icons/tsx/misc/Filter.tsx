import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Filter: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M22 3H2L10 12.46V19L14 21V12.46L22 3Z'
                stroke={stroke}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
