const SummaryTable = (hamoto) => {
  return (
    <>
      <table className='table is-fullwidth'>
        <thead>
          <tr>
            <th>Hamoto</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isbn</td>
            <td>{summary.isbn}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{summary.title}</td>
          </tr>
          <tr>
            <td>volume</td>
            <td>{summary.volume}</td>
          </tr>
          <tr>
            <td>series</td>
            <td>{summary.series}</td>
          </tr>
          <tr>
            <td>publisher</td>
            <td>{summary.publisher}</td>
          </tr>
          <tr>
            <td>author</td>
            <td>{summary.author}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SummaryTable
