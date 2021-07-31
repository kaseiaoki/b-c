import Link from 'next/link'

const SideMenu = ({}) => {
  return (
    <>
      <aside className='menu'>
        <div className='container'>
          <h2 className='is-size-3 is-family-sans-serif subtitle'>b-c</h2>
        </div>
        <p className='menu-label'>Search</p>
        <ul className='menu-list'>
          <li>
            <div className='field has-addons'>
              <p className='control'>
                <input className='input' type='text' placeholder='isbn' />
              </p>
              <p className='control'>
                <a className='button is-static'>Search</a>
              </p>
            </div>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideMenu
