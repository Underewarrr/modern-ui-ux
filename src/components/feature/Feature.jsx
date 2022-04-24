import React from 'react';
import './feature.css';


const Feature = ( {tittle, text }) => {  // tittle and text are props
  return (
    <div className='uiux__features-container__ feature'>
      <div className='uiux__features-container__feature-tittle'>
       <div>
        <h1>{tittle}</h1>
       </div>
        <div className='uiux__features-container_feature-text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature