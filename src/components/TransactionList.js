import React, { useContext, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { GlobalContext } from "../context/GlobalState";

import Transaction from "./Transaction";
import DateInput from "./DateInput";

const getToday = () => {
  const date = new Date(),
    year = date.getFullYear(),
    month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const TransactionList = () => {
  const [date, setDate] = useState(getToday())
  const { days, createDays, updateDays, getDays } = useContext(GlobalContext);

  const { register, handleSubmit, reset } = useForm(days);

  useEffect(() => {
    getDays(date);
    reset({});
  }, [date, getDays, reset]);

  const onSelectAll = useCallback(() => {
    days.forEach(day => {
      const obj = {
        militareId: day.id,
        data: date,
        cafe: 'S',
        almoco: 'S',
        jantar: 'S',
        hierarquia: 11
      }

      if (day.arranchamentoId) {
        updateDays(day.arranchamentoId, { ...obj })
      } else {
        createDays({ ...obj })
      }
    });

    getDays(date);
    reset({});
  }, [days, date, getDays, reset, createDays, updateDays])

  const onSubmit = useCallback((data) => {
    days.forEach(day => {
      const obj = {
        militareId: day.id,
        data: date,
        cafe: data[day.id].cafe ? 'S' : 'N',
        almoco: data[day.id].almoco ? 'S' : 'N',
        jantar: data[day.id].jantar ? 'S' : 'N',
        hierarquia: 11
      }

      if (day.arranchamentoId) {
        updateDays(day.arranchamentoId, { ...obj })
      } else {
        createDays({ ...obj })
      }
    })
  }, [days, date, createDays, updateDays])

  return (
    <>
      <DateInput date={date} setDate={setDate} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-group">
          {days.map(day => (
            <Transaction
              key={day.id}
              register={register}
              {...day}
            />
          ))}
        </ul>
        <button type="submit" className="btn btn-success mt-3 col-3 p-3">
          Salvar
        </button>
      </form>
      <button className="btn btn-danger mt-3 col-3 p-3" onClick={onSelectAll} >
        Marcar todos e Salvar
      </button>
    </>
  );
};
