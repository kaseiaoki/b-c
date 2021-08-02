import SearchForm from '../componets/search-form'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <section>
        <div className='hero is-fullheight'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='is-size-1 is-family-sans-serif title pb-5'>Page Not Found</h1>
              <section className='m-8'>
                <div className='columns is-centered'>
                  <div className='column is-4'>
                    <SearchForm />
                  </div>
                </div>
              </section>
              <section>
                <div className='is-size-3 m-3'>or</div>
              </section>
              <section>
                <Link href={`/`}>
                  <a className='button is-text is-large'>Home</a>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
