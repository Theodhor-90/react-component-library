import { FC } from 'react'
import IconComponent from '../icon/IconComponent'

export interface ITabProps {
    active: boolean
    horizontal: boolean
    title: string
    content: string
}

const Tab: FC<ITabProps> = ({ active, horizontal, title, content }) => {
    return (
        <div className={`tab ${!horizontal && 'vertical'} ${active && 'active'}`}>
            <div className='media-placeholder'>
                <IconComponent
                    iconName='MiscStar'
                    size='xl'
                    stroke='#08307d'
                />
            </div>
            <div className='tab-content'>
                <div className='h6 tab__heading'>{title}</div>
                <p className='fs-body tab__description'>{content}</p>
            </div>
        </div>
    )
}

export default Tab
