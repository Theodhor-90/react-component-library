import { FC } from 'react'
import IconComponent, { TIconSize } from './IconComponent'
import { icons } from '../../icons/IconIndex'

const IconsDemo: FC<{ iconSize?: TIconSize; iconStroke?: 'string' }> = ({
    iconSize = 'md',
    iconStroke = 'black',
}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {Object.keys(icons).map((el, index) => (
                <div
                    style={{
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexBasis: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '25px',
                    }}
                >
                    <IconComponent
                        key={index}
                        iconName={el as keyof typeof icons}
                        size={iconSize}
                        stroke={iconStroke}
                    />
                    <div style={{ marginTop: '25px', fontSize: '12px' }}>{el}</div>
                </div>
            ))}
        </div>
    )
}

export default IconsDemo
