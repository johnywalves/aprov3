import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)
  const { days, getDays } = useContext(GlobalContext)
  // console.log(days)
  useEffect(() => {
    getTransactions()
    getDays()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h3>AGENDAMENTO</h3>
      <ul className="list-group">
        {transactions.map(transaction => {
          const selected = days.find(p => p.cpf === transaction.cpf);
          const checkCafe = selected && selected.cafe === 'S';
          const checkAlmoco = selected && selected.almoco === 'S';
          const checkJantar = selected && selected.jantar === 'S';
            return(
              <Transaction key={transaction.id} checkCafe={checkCafe} checkAlmoco={checkAlmoco} checkJantar={checkJantar} transaction={transaction} />
            )
        })}
      </ul>
    </>
  )
}