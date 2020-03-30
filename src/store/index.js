import React from 'react'
import PropTypes from 'prop-types'
import Reducers from './reducers'
import { StoreContext } from './useStore'

const Provider = ({ children }) => {
  const { store, reducers } = Reducers();

  const triggerDispatchs = action => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: triggerDispatchs
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Provider;