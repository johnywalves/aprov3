import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
import { useForm } from 'react-hook-form'

export const TransactionList = () => {
  const [date, setDate] = useState('')
  const { transactions, getTransactions } = useContext(GlobalContext)
  const { days, getDays } = useContext(GlobalContext)

  const handleChange = (e) => {
    setDate(e.target.value) }
    // console.log(date)
  useEffect(() => {
    getTransactions()
    getDays(date)
    // eslint-disable-next-line
  }, [date])
  // console.log('days',days)

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <input 
        className="form-control my-3" 
        type="date"
        onChange={handleChange}
        value={date}
        style={{width: 150}} 
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-group">
          {transactions.map((transaction, index) => {
            const selected = days && days.find(p => p.cpf === transaction.cpf);
              const checkCafe = selected && selected.cafe === 'S';
              const checkAlmoco = selected && selected.almoco === 'S';
              const checkJantar = selected && selected.jantar === 'S';
              // console.log('list',checkCafe, typeof(checkCafe), transaction.nomeguerra)
              return(
                <Transaction key={transaction.id} register={register} index={index} checkCafe={checkCafe} checkAlmoco={checkAlmoco} checkJantar={checkJantar} transaction={transaction} />
              )
          })}
        </ul>
        <button type='submit' className="btn btn-success">Salvar</button>
      </form>
    </>
  )
}