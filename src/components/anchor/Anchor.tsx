import { FC, useEffect, useState } from 'react'
import { icons } from '../../icons/IconIndex'
import IconComponent from '../icon/IconComponent'
import anchorColors from '../../scss/theme/variables/components/anchorColors'

export interface IAnchorProps {
    text: string
    destination: string
    disabled?: boolean
    iconName?: keyof typeof icons
}

const Anchor: FC<IAnchorProps> = ({
    text = 'Call-to-action',
    destination = '#',
    disabled = false,
    iconName,
}) => {
    const [color, setColor] = useState(anchorColors.regular)
    useEffect(() => {
        disabled ? setColor(anchorColors.disabled) : setColor(anchorColors.regular)
    }, [disabled])

    const updateIconColor = (action: 'in' | 'down' | 'away') => {
        switch (action) {
            case 'in':
                setColor(anchorColors.hover)
                break
            case 'down':
                setColor(anchorColors.active)
                break
            case 'away':
                setColor(anchorColors.regular)
        }
    }
    return (
        <a
            href={destination}
            className={`link ${disabled && 'disabled'}`}
            onMouseDown={() => updateIconColor('down')}
            onMouseEnter={() => updateIconColor('in')}
            onMouseLeave={() => updateIconColor('away')}
            onMouseUp={() => updateIconColor('away')}
        >
            {text}
            {iconName && (
                <IconComponent
                    iconName={iconName}
                    stroke={color}
                />
            )}
        </a>
    )
}

export default Anchor
