import Link from 'next/link'
import SearchForm from '../componets/search-form'

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
            <SearchForm />
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideMenu
