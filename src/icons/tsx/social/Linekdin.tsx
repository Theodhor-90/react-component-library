import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Linkedin: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.2775 8.4783H9.34452V21H13.2781V14.427C13.2781 10.7721 18.051 10.473 18.051 14.427V21H22V13.0712C22 6.90439 14.9368 7.12919 13.2775 10.1649V8.4783ZM3 21H6.95823V8.4783H3V21ZM6.9425 4.9566C6.9425 6.03747 6.06375 6.9132 4.97927 6.9132C3.89478 6.9132 3.01603 6.03747 3.01603 4.9566C3.01603 3.87661 3.89478 3 4.97927 3C6.06375 3 6.9425 3.87661 6.9425 4.9566Z'
                fill={stroke}
            />
        </svg>
    )
}
