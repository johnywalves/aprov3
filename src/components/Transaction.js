import React from 'react'

export const Transaction = ({ transaction, index, checkCafe, checkAlmoco, checkJantar }) => {
  return (
    <li className='list-group-item list-group-item-dark text-white list-group-item-action'>
      <div className="d-flex w-100 justify-content-between">
        <div className='col'>
          <span>{transaction.posto}</span> {transaction.nomeguerra}
        </div>
        <div className='col custom-control custom-checkbox'>
          <input 
            type='checkbox' 
            className='custom-control-input' 
            id={'data['+index+'].cafe'} 
            defaultChecked={checkCafe} 
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].cafe'}>Café</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'data['+index+'].almoco'} 
            defaultChecked={checkAlmoco} 
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].almoco'}>Almoço</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'data['+index+'].jantar'} 
            defaultChecked={checkJantar} 
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].jantar'}>Jantar</label>
        </div>
      </div>
    </li>
  )
}