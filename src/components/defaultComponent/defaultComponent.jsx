import React from 'react'
import HeaderComponent from '../headerComponent/headerComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        {children}
    </div>
  )
}

export default DefaultComponent