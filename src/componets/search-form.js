import Link from 'next/link'
import { useState, useEffect } from 'react'

const SearchForm = ({}) => {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    // 数字か'-'のみ許可
    const res = event.target.value.replace(/[^0-9-]/g, '')
    setSearch(res)
  }
  return (
    <>
      <div className='field has-addons'>
        <p className='control is-expanded'>
          <input
            className='input'
            type='text'
            placeholder='isbn ex:978-4150503321'
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
