import React, { useContext } from 'react'
import "./Cella.css"
import { KattContext, KattProvider } from '../context/KattContext'



export default function Cella(props) {

    const {katt} = useContext(KattContext)

    function handleClick(){
        katt(props.index)
    }

  return (
    <div className='cella' onClick={()=>handleClick()}>{props.jel}</div>
  )
}
