import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Info: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                stroke={stroke}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 16V12'
                stroke={stroke}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 8H12.01'
                stroke={stroke}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
