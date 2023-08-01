import { FC, useEffect, useState } from 'react'
import IconComponent, { TIconSize } from '../icon/IconComponent'
import controlColors from '../../scss/theme/variables/components/controlColors'

export type TControlIcon = 'pause' | 'play' | 'stop'

export interface IControlProps {
    disabled?: boolean
    icon: TControlIcon
}

const ControlIcon: FC<{ icon: TControlIcon; iconSize: TIconSize; stroke: string }> = ({
    icon,
    stroke,
}) => {
    switch (icon) {
        case 'pause':
            return (
                <IconComponent
                    iconName='ControlsPause'
                    stroke={stroke}
                />
            )
        case 'play':
            return (
                <IconComponent
                    iconName='ControlsPlay'
                    stroke={stroke}
                />
            )
        default:
            return (
                <IconComponent
                    iconName='ControlsStop'
                    stroke={stroke}
                />
            )
    }
}

const Control: FC<IControlProps> = ({ icon, disabled = false }) => {
    const [color, setColor] = useState(controlColors.regular)
    useEffect(() => {
        disabled ? setColor(controlColors.disabled) : setColor(controlColors.regular)
    }, [disabled])

    const updateIconColor = (action: 'in' | 'down' | 'away') => {
        switch (action) {
            case 'in':
                setColor(controlColors.hover)
                break
            case 'down':
                setColor(controlColors.active)
                break
            case 'away':
                setColor(controlColors.regular)
        }
    }
    return (
        <button
            className={`control control-${icon}`}
            disabled={disabled}
            onMouseDown={() => updateIconColor('down')}
            onMouseEnter={() => updateIconColor('in')}
            onMouseLeave={() => updateIconColor('away')}
            onMouseUp={() => updateIconColor('away')}
        >
            <div className='control-icon-container'>
                <ControlIcon
                    icon={icon}
                    iconSize='lg'
                    stroke={color}
                />
            </div>
        </button>
    )
}

export default Control
