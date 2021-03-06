import getOpenBD from '../../api/openBD'
import HeroHeader from '../../componets/hero-header'
import SideMenu from '../../componets/side-menu'
import Tile from '../../componets/tile/tile'
import TileMedia from '../../componets/tile/tile-media'
import SummaryTable from '../../foundations/summary-table'
import HanmotoTable from '../../foundations/hanmoto-table'

const Biblio = ({ summary, collateralDetail, hanmoto }) => {
  const summaryTable = SummaryTable(summary) ?? ''
  const hanmotoTable = HanmotoTable(hanmoto)
  const detail = collateralDetail ?? ''
  const cover = summary.cover ?? ''
  console.log(detail.TextContent.length)
  return (
    <>
      <section className='columns m-3'>
        <div className='column is-3'>
          <SideMenu />
        </div>
        <div className='column is-9'>
          <HeroHeader pageTitle={summary.title} pageSubTitle={summary.author} />
          <section>
            <div className='tile is-ancestor'>
              <div className='tile is-5 is-vertical is-parent'>
                <Tile title={'summary'} content={summaryTable} />
                <TileMedia src={cover} />
              </div>
              <div className='tile is-7 is-parent'>
                <Tile
                  title={summary.title}
                  content={
                    2 <= detail.TextContent.length
                      ? detail.TextContent.reduce(
                          (accumulator, currentValue) => accumulator.Text + currentValue.Text,
                        )
                      : detail.TextContent[0].Text
                  }
                />
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

  if (!json) {
    return {
      notFound: true,
    }
  }

  const summary = json[0].summary ?? ''
  const collateralDetail = json[0].onix.CollateralDetail ?? ''
  const hanmoto = json[0].hamoto ?? ''
  return {
    props: {
      summary,
      collateralDetail,
      hanmoto,
    },
  }
}
