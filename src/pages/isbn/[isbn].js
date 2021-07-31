import Link from 'next/link'
import { useRouter } from 'next/router'
import getOpenBD from '../../api/openBD'
import HeroHeader from '../../componets/hero-header'
import SideMenu from '../../componets/side-menu'
import Tile from '../../componets/tile'

const Biblio = ({ title, author }) => {
  const router = useRouter()
  const { isbn } = router.query
  const json = (async () => {
    return await getOpenBD(isbn)
  })()

  return (
    <>
      <section className='columns m-3'>
        <div className='column is-3'>
          <SideMenu />
        </div>
        <div className='column is-9'>
          <HeroHeader pageTitle={title} pageSubTitle={author} />
        </div>
      </section>
      <section></section>
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
