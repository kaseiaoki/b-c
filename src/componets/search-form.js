import Link from 'next/link'
import { useState, useEffect } from 'react'

const SearchForm = ({}) => {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <>
      <div className='field has-addons'>
        <p className='control is-expanded'>
          <input
            className='input'
            type='text'
            placeholder='isbn'
            value={search}
            onChange={handleChange}
          />
        </p>
        <p className='control'>
          <Link href={`/isbn/${search}`}>
            <a className='button'>Search</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default SearchForm
