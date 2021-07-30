import getOpenBD from '../api/openBD'
import randomeIsbn from '../lib/random-isbn'

const Index = () => {
  ;(async () => {
    console.log(await getOpenBD('9784150503321'))
  })()
  return (
    <>
      <section>
        <div className='hero is-fullheight'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='is-size-1 is-family-sans-serif title'>b-c</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
