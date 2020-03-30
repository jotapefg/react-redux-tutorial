import { useContext, createContext } from 'react'
import { initialState } from './reducers/clickReducer'

export const defaultStore = {
  store: { ...initialState },
  dispatch: () => {}
}

export const StoreContext = createContext(defaultStore);

export default () => {
  return useContext(StoreContext)
}