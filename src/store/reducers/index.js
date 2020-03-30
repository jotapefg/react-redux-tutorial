import { useReducer } from 'react'
import clickReducer, { initialState } from './clickReducer.js'

const Reducers =() => {
  const [clickStore, click] = useReducer(clickReducer, initialState)

  return {
    store: {...clickStore},
    reducers: [click]
  }
}

export default Reducers;