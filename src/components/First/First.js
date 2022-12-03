import React from 'react'
import data from '../../data'
import Card from './Card/Card'
import Lom from './Card/img/Lom.jpg'
import Logoo from './Card/img/Logoo.png'


const First = () => {
  const name = data[0].Name
  const nameko = data[1].Name
  const universe = data[0].Universe
  const universse = data[1].Universe



  return (
    <div className='bg-slate-300 '>
      <div className='flex'>
      <Card Name={name} universe={universe} imagess={Lom} />
      <Card Name={nameko} universe={universse} imagess={Logoo} />
      </div>
  
    </div>
  )
}

export default First