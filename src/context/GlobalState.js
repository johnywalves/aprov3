import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  transactions: [],
  days: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  async function getTransactions() {
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
  }

  async function getDays(date) {
    try {
      const res = await axios.get(`http://localhost:5000/arranchamento?data=${date}`)

      dispatch({
        type: 'GET_DAYS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'DAYS_ERROR',
        payload: err.response.data.error
      })
    }
  }

  return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    days: state.days,
    getTransactions,
    getDays
  }}>
    {children}
  </GlobalContext.Provider>)
}