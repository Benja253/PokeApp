import React from 'react'

const Pagination = ({arrayPages, setPage, page, cantPage}) => {

  const previewPage = () => {
    if(page - 1 >= 1){
      setPage(page - 1)
    } else {
      setPage(cantPage)
    }
  }

  const nextPage = () => {
    if(page + 1 <= cantPage){
      setPage(page + 1)
    } else {
      setPage(1)
    }
  }

  return (
    <div className='pagination-container'>
      <div className='preview-page' onClick={previewPage}>&lt;</div>
      {
        arrayPages.map(number =>(
          <p key={number} onClick={() => setPage(number)}>{number}</p>
        ))
      }
      <div className="next-page" onClick={nextPage}>&gt;</div>
    </div>
  )
}

export default Pagination