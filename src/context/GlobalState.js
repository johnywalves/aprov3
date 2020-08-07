import React, { createContext, useReducer, useCallback } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  transactions: [],
  days: [],
  error: null,
  loading: true
}

const headers = {
  'Content-Type': 'application/json',
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const getTransactions = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/militares')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }, [])

  const createDays = useCallback(async (data) => {
    console.log('createDays', data)
    await axios.post("http://localhost:5000/arranchamentos", {
      ...data
    }, { headers })
  }, [])

  const updateDays = useCallback(async (id, data) => {
    console.log('updateDays', id, data)
    await axios.put(`http://localhost:5000/arranchamentos/${id}`, {
      ...data
    }, { headers })
  }, [])

  const getDays = useCallback(async (date) => {
    try {
      const res = await axios.get(`http://localhost:5000/militares?_embed=arranchamentos&data=${date}`)

      const dataset = res.data.map(militar => {
        const arranchamento = militar.arranchamentos.find(arranchamento => arranchamento.data === date)
        return {
          id: militar.id,
          nomeguerra: militar.nomeguerra,
          posto: militar.posto,
          arranchamentoId: arranchamento ? arranchamento.id : null,
          cafe: arranchamento ? arranchamento.cafe === 'S' : false,
          almoco: arranchamento ? arranchamento.almoco === 'S' : false,
          jantar: arranchamento ? arranchamento.jantar === 'S' : false
        }
      })

      dispatch({
        type: 'GET_DAYS',
        payload: dataset
      })
    } catch (err) {
      dispatch({
        type: 'DAYS_ERROR',
        payload: err.response.data.error
      })
    }
  }, [])

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    days: state.days,
    getTransactions,
    createDays,
    updateDays,
    getDays
  }}>
    {children}
  </GlobalContext.Provider>)
}