import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { useForm } from "react-hook-form";

export const TransactionList = () => {
  const [date, setDate] = useState("");
  const { transactions, getTransactions } = useContext(GlobalContext);
  const { days, getDays } = useContext(GlobalContext);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    getTransactions();
    getDays(date);
  }, [date, getDays, getTransactions]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <input
        className="form-control my-3"
        type="date"
        onChange={handleChange}
        value={date}
        style={{ width: 150 }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-group">
          {transactions.map((transaction, index) => {
            const selected =
              days && days.find((p) => p.cpf === transaction.cpf);
            return (
              <Transaction
                key={transaction.id}
                index={index}
                register={register}
                {...transaction}
                {...selected}
              />
            );
          })}
        </ul>
        <button type="submit" className="btn btn-success">
          Salvar
        </button>
      </form>
    </>
  );
};
