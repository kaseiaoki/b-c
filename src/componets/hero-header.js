const HeroHeader = ({ pageTitle, pageSubTitle }) => {
  const title = pageTitle ?? 'b-c'
  const subtitle = pageSubTitle ?? ''
  return (
    <>
      <section className=''>
        <div className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='is-size-3 is-family-sans-serif title'>{title}</h1>
              <span className='is-size-4 is-family-sans-serif subtitle'>{subtitle}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroHeader
