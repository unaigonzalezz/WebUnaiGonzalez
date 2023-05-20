import React, { Component } from 'react';
import './stripe.css'

function Stripe(props) {
  return (
    <div className='stripe' style={{ backgroundImage: `url(${props.background})`}}>
      <h3 className='stripeText'>{props.name}</h3>
    </div>
  )
}

export default Stripe;