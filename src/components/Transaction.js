import React from 'react'

export const Transaction = ({ transaction, checkCafe, checkAlmoco, checkJantar }) => {
  return (
    <li className='list-group-item list-group-item-dark text-white list-group-item-action'>
      <div className="d-flex w-100 justify-content-between">
        <div className='col'>
          <span>{transaction.posto}</span> {transaction.nomeguerra}
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'caf-' + transaction.id} 
            defaultChecked={checkCafe} 
          />
          <label className="custom-control-label" htmlFor={'caf-' + transaction.id}>Café</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'alm-' + transaction.id} 
            defaultChecked={checkAlmoco} 
          />
          <label className="custom-control-label" htmlFor={'alm-' + transaction.id}>Almoço</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'jan-' + transaction.id} 
            defaultChecked={checkJantar} 
          />
          <label className="custom-control-label" htmlFor={'jan-' + transaction.id}>Jantar</label>
        </div>
      </div>
    </li>
  )
}