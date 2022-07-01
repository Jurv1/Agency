import React from 'react'
import styled from 'styled-components'


export const BodyCard = (props) => {
  return (
    <div className='body__card'>
        <p className="card__category">
            {props.category}
        </p>
        <div className="card__name">
            {props.name}
        </div>
    </div>
  )
}



export default BodyCard