import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ id, register, posto, nomeguerra, cafe, almoco, jantar }) => {
  return (
    <li className='list-group-item list-group-item-action'>
      <div className="d-flex w-100 justify-content-between">
        <div className='col'>
          <span>{posto}</span> {nomeguerra}
        </div>
        <div className='col custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id={`${id}.cafe`}
            name={`${id}.cafe`}
            ref={register}
            defaultChecked={cafe}
          />
          <label className="custom-control-label" htmlFor={`${id}.cafe`}>Café</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`${id}.almoco`}
            name={`${id}.almoco`}
            ref={register}
            defaultChecked={almoco}
          />
          <label className="custom-control-label" htmlFor={`${id}.almoco`}>Almoço</label>
        </div>
        <div className="col custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`${id}.jantar`}
            name={`${id}.jantar`}
            ref={register}
            defaultChecked={jantar}
          />
          <label className="custom-control-label" htmlFor={`${id}.jantar`}>Jantar</label>
        </div>
      </div>
    </li>
  )
}

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  posto: PropTypes.string.isRequired,
  nomeguerra: PropTypes.string.isRequired,
  cafe: PropTypes.bool.isRequired,
  almoco: PropTypes.bool.isRequired,
  jantar: PropTypes.bool.isRequired,
};

export default Transaction