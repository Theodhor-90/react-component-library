import { FC } from 'react'
import placeholder from '../../assets/placeholderImage.png'

const Avatar: FC<{ image: string; size?: 'sm' | 'md' }> = ({ image = placeholder, size }) => {
    return (
        <div className={`avatar ${size === 'sm' ? 'avatar--small' : ''}`}>
            <img
                alt='avatar_image'
                className='media-image'
                src={image}
            />
        </div>
    )
}

export default Avatar
