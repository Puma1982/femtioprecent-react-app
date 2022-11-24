import React from 'react'
import './SelectsStyles.css'

import Ica1 from '../video/ica1.webp'
import Coop2 from '../video/coop2.webp'
import Willys1 from '../video/willys1.jpeg'
import Willys2 from '../video/willys2.jpeg'
import Lidell1 from '../video/lidell1.png'
import Lidell2 from '../video/lidell2.png'


import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
  return (
    <div name ='views' className='selects'>
    <div className='container'>
    <SelectsImg bgImg={Ica1} text='ICA 50%' />
       <SelectsImg bgImg={Coop2} text='coop 50%' />
       <SelectsImg bgImg={Willys1} text='WiLLY:S 50%' />
       <SelectsImg bgImg={Willys2} text='WiLLY:S 50%' />
       <SelectsImg bgImg={Lidell1} text='LiDL 50%' />
       <SelectsImg bgImg={Lidell2} text='LiDL 50%' />

      
    </div>

    </div>
  )
}

export default Selects