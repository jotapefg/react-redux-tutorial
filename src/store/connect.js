import React from 'react'
import {StoreContext} from './useStore'

const returnPropsAsDefault = (store,props) => props;

const Connect = (mapsStateToProps = returnPropsAsDefault) => Component => {
  return function WrapConnect(props) {
    return (
      <StoreContext.Consumer>
        {({dispatch, store}) => {
          const storeProps = mapsStateToProps(store, props)
          return <Component {...storeProps} dispatch={dispatch} />
        }}
      </StoreContext.Consumer>
    )
  }
}

export default Connect;