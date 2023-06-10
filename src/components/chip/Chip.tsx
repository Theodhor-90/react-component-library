import { FC } from 'react'

export interface IChipProps {
    text: string
    disabled?: boolean
}

const Chip: FC<IChipProps> = ({ text, disabled }) => {
    return (
        <button
            className='chip py-1 px-3 fs-button br-4'
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Chip
