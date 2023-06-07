import { FC, useEffect, useState } from 'react'
import { icons } from '../../icons/IconIndex'
import IconComponent from '../icon/IconComponent'
import buttonColors from '../../scss/theme/variables/components/buttonColors'

interface IButtonProps {
    variant?: 'anchor' | 'button'
    mode?: 'primary' | 'secondary' | 'ghost'
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    pressHandler?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    className?: string
    text?: string
    icon?: keyof typeof icons
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    type?: 'button' | 'reset' | 'submit'
    disabled?: boolean
    href?: string
}

const Button: FC<IButtonProps> = ({
    variant = 'button',
    mode = 'primary',
    clickHandler = () => {},
    pressHandler = () => {},
    className = '',
    text = 'Button',
    icon = null,
    iconSize = 'md',
    type = 'button',
    disabled = false,
    href = '#',
}) => {
    const [iconColor, setIconColor] = useState('black')
    useEffect(() => {
        if (disabled) {
            switch (mode) {
                case 'primary':
                    setIconColor(buttonColors.primary.disabled)
                    break
                case 'secondary':
                    setIconColor(buttonColors.secondary.disabled)
                    break
                case 'ghost':
                    setIconColor(buttonColors.ghost.disabled)
                    break
            }
        } else switchIconColor('regular')
    }, [disabled, mode])

    const switchIconColor = (state: 'regular' | 'hover' | 'active') => {
        switch (mode) {
            case 'primary':
                setIconColor(buttonColors.primary[state])
                break
            case 'secondary':
                setIconColor(buttonColors.secondary[state])
                break
            case 'ghost':
                setIconColor(buttonColors.ghost[state])
        }
    }

    const updateIconColor = (action: 'in' | 'down' | 'away') => {
        switch (action) {
            case 'in':
                switchIconColor('hover')
                break
            case 'down':
                switchIconColor('active')
                break
            case 'away':
                switchIconColor('regular')
        }
    }

    return variant === 'button' ? (
        <button
            type={type}
            onClick={(e) => clickHandler(e)}
            onKeyDown={(e) => pressHandler(e)}
            disabled={disabled}
            className={`button button--${mode} ${className} ${disabled ? 'button--disabled' : ''}`}
            onMouseDown={() => updateIconColor('down')}
            onMouseEnter={() => updateIconColor('in')}
            onMouseLeave={() => updateIconColor('away')}
            onMouseUp={() => updateIconColor('away')}
        >
            {text}
            {icon && (
                <IconComponent
                    iconName={icon}
                    size={iconSize}
                    stroke={iconColor}
                />
            )}
        </button>
    ) : (
        <a
            href={href}
            type={type}
            className={`button button--${mode} ${className} ${disabled ? 'button--disabled' : ''}`}
            onMouseDown={() => updateIconColor('down')}
            onMouseEnter={() => updateIconColor('in')}
            onMouseLeave={() => updateIconColor('away')}
            onMouseUp={() => updateIconColor('away')}
        >
            {text}
            {icon && (
                <IconComponent
                    iconName={icon}
                    size={iconSize}
                    stroke={iconColor}
                />
            )}
        </a>
    )
}

export default Button
