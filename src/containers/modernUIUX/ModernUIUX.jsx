import React from 'react'
import './modernUIUX.css'
import Feature from '../../../src/components/feature/Feature.jsx'

const modernUIUX = () => {
  return (
   <div className='uiux__whatgpt3 section__margin' id='whpt3'>
    <div className='uiux__whatgpt3-feature'>
     <Feature />
     <div className='uiux__whatgpt3-heading'>
      <h1 className='gradient-text'>
       The possibilities are beyond your imagination
      </h1>
      <p>
        <p>Explore The Library</p>
      </p>
      <div className='uiux__whatgpt3-container'>
       <Feature />
       <Feature />
       <Feature />
      </div>
     </div>
    </div>
   </div>
  )
}

export default modernUIUX