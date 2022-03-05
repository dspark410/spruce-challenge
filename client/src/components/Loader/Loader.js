import React from 'react'
import { SpinnerContainer, Spinner } from './Styles'

function Loader() {
  return (
    <SpinnerContainer>
      <Spinner>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='2'
        />
      </Spinner>
    </SpinnerContainer>
  )
}

export default Loader
