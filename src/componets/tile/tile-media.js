import Link from 'next/link'
import Image from 'next/image'

const TileMedia = ({ title, src }) => {
  const Title = title ?? ''
  const Src = src ?? ''
  return (
    <>
      <div className='tile is-parent'>
        <article className='tile is-child box'>
          <p className='title is-3'>{title}</p>
          <figure className='image is-4by3'>
            <Image
              src={src}
              alt='Calligraphy'
              width={256}
              height={256}
              //   className='image is-128x128'
            />
          </figure>
        </article>
      </div>
    </>
  )
}

export default TileMedia
