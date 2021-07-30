import Link from 'next/link'
import { useRouter } from 'next/router'
import getOpenBD from '../../api/openBD'

const Biblio = ({ title, author }) => {
  const router = useRouter()
  const { isbn } = router.query
  const json = (async () => {
    return await getOpenBD('9784150503321')
  })()

  return (
    <>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div classN='container'>
            <h1 className='title'>{title} </h1>
            <h2 className='subtitle'>{author}</h2>
          </div>
        </div>
      </section>
      <section className='section'></section>
    </>
  )
}

export default Biblio

export async function getServerSideProps({ params }) {
  const json = await getOpenBD(params.isbn)
  await console.log(json)
  const summary = json[0].summary
  const title = summary.title
  const author = summary.author
  return {
    props: {
      title,
      author,
    },
  }
}
