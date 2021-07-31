import Link from 'next/link'
import Image from 'next/image'

const TileMedia = ({ title, src }) => {
  return (
    <>
      <div className='tile is-parent'>
        <article className='tile is-child box'>
          <p className='title is-3'>{title}</p>
          <figure className='image is-2by3'>
            <Image src={src} alt='Calligraphy' layout='fill' objectFit='contain' />
          </figure>
        </article>
      </div>
    </>
  )
}

export default TileMedia
