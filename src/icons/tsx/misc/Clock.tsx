import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Clock: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            viewBox='0 0 30 30'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4.19922 15.3522C4.19922 16.7704 4.47857 18.1748 5.02132 19.4851C5.56407 20.7955 6.35959 21.986 7.36247 22.9889C8.36534 23.9918 9.55592 24.7873 10.8662 25.3301C12.1766 25.8728 13.5809 26.1522 14.9992 26.1522C16.4175 26.1522 17.8219 25.8728 19.1322 25.3301C20.4425 24.7873 21.6331 23.9918 22.636 22.9889C23.6388 21.986 24.4344 20.7955 24.9771 19.4851C25.5199 18.1748 25.7992 16.7704 25.7992 15.3522C25.7992 12.4878 24.6614 9.74079 22.636 7.7154C20.6106 5.69001 17.8636 4.55215 14.9992 4.55215C12.1349 4.55215 9.38786 5.69001 7.36247 7.7154C5.33707 9.74079 4.19922 12.4878 4.19922 15.3522Z'
                stroke={stroke}
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14.9993 9.35216V15.3522L18.5993 18.9522'
                stroke={stroke}
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
