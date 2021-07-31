const Tile = ({ title, content }) => {
  return (
    <>
      <div className='tile is-child box'>
        <p className='title'>{title}</p>
        <p>{content}</p>
      </div>
    </>
  )
}

export default Tile
