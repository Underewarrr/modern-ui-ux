import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'


const Partners = () => (
  <><div>
    <img src={google} alt="google" />
  </div><div>
      <img src={slack} alt="slack" />
    </div><div>
      <img src={atlassian} alt="atlassian" />
    </div><div>
      <img src={dropbox} alt="dropbox" />
    </div><div>
      <img src={shopify} alt="shopify" />
    </div></>
)

const Brand = () => {
  return (
    <div className='uiux__brand section_padding'>
      teste
     <Partners />
    </div>
  )
}

export default Brand