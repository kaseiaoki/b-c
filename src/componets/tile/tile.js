const Tile = ({ title, content }) => {
  return (
    <>
      <div className='tile is-child box'>
        <p className='title'>{title}</p>
        <div>{content}</div>
      </div>
    </>
  )
}

export default Tile
