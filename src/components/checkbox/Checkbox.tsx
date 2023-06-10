import { FC } from 'react'

interface ICheckboxProps {
    id: string
    name: string
    text: string
    onChange: () => void
    disabled?: boolean
    checked?: boolean
}

const Checkbox: FC<ICheckboxProps> = ({ id, name, text, disabled, checked, onChange }) => {
    return (
        <div className='checkbox-container input-wrapper'>
            <input
                type='checkbox'
                id={id}
                name={name}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    )
}

export default Checkbox
