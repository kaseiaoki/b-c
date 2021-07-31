import Link from 'next/link'
import { useRouter } from 'next/router'
import getOpenBD from '../../api/openBD'
import HeroHeader from '../../componets/hero-header'
import SideMenu from '../../componets/side-menu'
import Tile from '../../componets/tile/tile'
import TileMedia from '../../componets/tile/tile-media'

const Biblio = ({ summary, collateralDetail }) => {
  console.log(summary)
  console.log(collateralDetail.TextContent[0])
  return (
    <>
      <section className='columns m-3'>
        <div className='column is-2'>
          <SideMenu />
        </div>
        <div className='column is-10'>
          <HeroHeader pageTitle={summary.title} pageSubTitle={summary.author} />
          <section>
            <div className='tile is-ancestor'>
              <div className='tile is-4 is-vertical is-parent'>
                <Tile title={summary.publisher} content={summary.pubdate} />
                <TileMedia title={'Cover'} src={summary.cover} />
              </div>
              <div className='tile is-parent'>
                <Tile title={summary.title} content={collateralDetail.TextContent[0].Text} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Biblio

export async function getServerSideProps({ params }) {
  const json = await getOpenBD(params.isbn)
  await console.log(json)
  const summary = json[0].summary
  const collateralDetail = json[0].onix.CollateralDetail
  return {
    props: {
      summary,
      collateralDetail,
    },
  }
}
