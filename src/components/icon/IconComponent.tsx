import { FC } from 'react'
import { icons } from '../../icons/IconIndex'

export type TIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface IIconComponentProps {
    iconName: keyof typeof icons
    stroke?: string
    fill?: string
    size?: TIconSize
}

const IconComponent: FC<IIconComponentProps> = ({
    iconName,
    stroke = 'black',
    fill = 'none',
    size = 'md',
}) => {
    const Icon = icons[iconName]

    return (
        <div className={`icon-container ${size}`}>
            <Icon
                stroke={stroke}
                fill={fill}
            />
        </div>
    )
}

export default IconComponent
