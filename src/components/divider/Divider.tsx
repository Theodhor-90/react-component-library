import { FC, useEffect, useState } from 'react'

export type TSpacingSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface IDividerProps {
    direction?: 'horizontal' | 'vertical'
    before?: boolean
    after?: boolean
    size?: TSpacingSize
    visible?: boolean
}

const Divider: FC<IDividerProps> = ({
    direction = 'horizontal',
    before = true,
    after = true,
    size = 3,
    visible = true,
}) => {
    const [className, setClassName] = useState('')
    const getClassName = () => {
        const directionClassName = `divider-${direction}`
        const getSpacingClassName = () => {
            switch (direction) {
                case 'horizontal':
                    if (before) {
                        if (after) {
                            return `py-${size}`
                        } else return `pt-${size}`
                    } else if (after) {
                        return `pb-${size}`
                    } else return ''
                case 'vertical':
                    if (before) {
                        if (after) {
                            return `px-${size}`
                        } else return `ps-${size}`
                    } else if (after) {
                        return `pe-${size}`
                    } else return ''
            }
        }
        return `${directionClassName} ${getSpacingClassName()} ${visible && 'visible-line'}`
    }
    useEffect(() => {
        setClassName(getClassName())
    }, [direction, before, after, size, visible])

    return (
        <div className={className}>
            <div className='line'></div>
        </div>
    )
}

export default Divider
