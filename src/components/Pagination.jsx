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

  const previewBlockPages = () =>{
    setPage(arrayPages[0] - 1)
  }

  const nextBlockPages = () =>{
    setPage(arrayPages[4] + 1)
  }

  return (
    <div className='pagination-container'>
      <div className='preview-page' onClick={previewPage}>&lt;</div>
      {
        arrayPages[0] !== 1 && 
        <span
          className='block-pages'
          onClick={previewBlockPages}
        >...</span>
      }
      {
        arrayPages.map(number =>(
          number === page ?
            <p
              className='number-page active-page'
              key={number}
              onClick={() => setPage(number)}>{number}
            </p>
          :
            <p
              className='number-page'
              key={number}
              onClick={() => setPage(number)}>{number}
            </p>
        ))
      }
      {
        arrayPages[arrayPages.length - 1] !== cantPage && 
        <span
          className='block-pages'
          onClick={nextBlockPages}
        >...</span>
      }
      <div className="next-page" onClick={nextPage}>&gt;</div>
    </div>
  )
}

export default Pagination