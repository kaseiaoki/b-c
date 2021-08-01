import SearchForm from '../componets/search-form'

const Index = () => {
  return (
    <>
      <section>
        <div className='hero is-fullheight'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='is-size-1 is-family-sans-serif title'>b-c</h1>
              <section className='m-8'>
                <div className='columns is-centered'>
                  <div className='column is-4'>
                    <SearchForm />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
