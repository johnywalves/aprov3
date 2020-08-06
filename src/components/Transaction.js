import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ index, register, posto, nomeguerra, cafe, almoco, jantar }) => {
  const checkCafe = cafe === 'S';
  const checkAlmoco = almoco === 'S';
  const checkJantar = jantar === 'S';

  return (
    <li className='list-group-item list-group-item-dark text-white list-group-item-action'>
      <div className="d-flex w-100 justify-content-between">
        <div className='col'>
          <span>{posto}</span> {nomeguerra}
        </div>
        <div className='col custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id={'data[' + index + '].cafe'}
            name={'data[' + index + '].cafe'}
            ref={register}
            defaultChecked={checkCafe}
          />
          <label className="custom-control-label" htmlFor={'data[' + index + '].cafe'}>Café</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={'data[' + index + '].almoco'}
            name={'data[' + index + '].almoco'}
            ref={register}
            defaultChecked={checkAlmoco}
          />
          <label className="custom-control-label" htmlFor={'data[' + index + '].almoco'}>Almoço</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={'data[' + index + '].jantar'}
            name={'data[' + index + '].jantar'}
            ref={register}
            defaultChecked={checkJantar}
          />
          <label className="custom-control-label" htmlFor={'data[' + index + '].jantar'}>Jantar</label>
        </div>
      </div>
    </li>
  )
}

Transaction.propTypes = {
  index: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  posto: PropTypes.string.isRequired,
  nomeguerra: PropTypes.string.isRequired,
  cafe: PropTypes.string,
  almoco: PropTypes.string,
  jantar: PropTypes.string,
};

export default Transaction