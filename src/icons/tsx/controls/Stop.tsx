import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Stop: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect
                x='6'
                y='6'
                width='12'
                height='12'
                fill={stroke}
            />
        </svg>
    )
}
