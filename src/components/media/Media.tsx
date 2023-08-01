import { FC } from 'react'

export interface IMediaProps {
    media: {
        type: 'image' | 'video'
        src: string
    }
    alt?: string
    aspectRatio: '1-1' | '4-3' | '16-9'
    muted?: boolean
    autoplay?: boolean
}

const Media: FC<IMediaProps> = ({
    media,
    alt = '',
    aspectRatio,
    muted = true,
    autoplay = true,
}) => {
    return (
        <div className={`media ar-${aspectRatio}`}>
            {media.type === 'image' ? (
                <img
                    className='media-image'
                    src={media.src}
                    alt={alt}
                />
            ) : (
                <video
                    src={media.src}
                    width='100%'
                    height='100%'
                    autoPlay={autoplay}
                    muted={muted}
                ></video>
            )}
        </div>
    )
}

export default Media
