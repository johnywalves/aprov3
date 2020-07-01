import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const [date, setDate] = useState('')
  const { transactions, getTransactions } = useContext(GlobalContext)
  const { days, getDays } = useContext(GlobalContext)
  // console.log(days)
  const handleChange = (e) => {
    setDate(e.target.value) }
    console.log(date)
  useEffect(() => {
    getTransactions()
    getDays(date)
    // eslint-disable-next-line
  }, [date])
  console.log('days',days)

  return (
    <>
      <input 
        className="form-control my-3" 
        type="date"
        onChange={handleChange}
        value={date}
        style={{width: 150}} 
      />
      <ul className="list-group">
        {transactions.map((transaction, index) => {
          const selected = days && days.find(p => p.cpf === transaction.cpf);
          const checkCafe = selected && selected.cafe === 'S';
          const checkAlmoco = selected && selected.almoco === 'S';
          const checkJantar = selected && selected.jantar === 'S';
            return(
              <Transaction key={transaction.id} index={index} checkCafe={checkCafe} checkAlmoco={checkAlmoco} checkJantar={checkJantar} transaction={transaction} />
            )
        })}
      </ul>
    </>
  )
}