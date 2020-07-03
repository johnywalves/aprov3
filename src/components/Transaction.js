import React from 'react'

export const Transaction = ({ transaction, index, register, checkCafe, checkAlmoco, checkJantar }) => {
  // if (typeof checkCafe == 'undefined' || !checkCafe || checkCafe != true) { checkCafe = false; console.log('type',checkCafe, transaction.nomeguerra) } 
  console.log(checkCafe)
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
            name={'data['+index+'].cafe'}
            ref={register}
            defaultChecked={checkCafe} 
            // onChange={() =>checkCafe}
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].cafe'}>Café</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'data['+index+'].almoco'} 
            name={'data['+index+'].almoco'} 
            ref={register}
            defaultChecked={checkAlmoco} 
            // onChange={() => checkAlmoco}
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].almoco'}>Almoço</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id={'data['+index+'].jantar'} 
            name={'data['+index+'].jantar'} 
            ref={register}
            defaultChecked={checkJantar} 
            // onChange={() => checkJantar}
          />
          <label className="custom-control-label" htmlFor={'data['+index+'].jantar'}>Jantar</label>
        </div>
      </div>
    </li>
  )
}