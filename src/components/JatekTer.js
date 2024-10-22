import React, { useContext } from 'react'
import Cella from './Cella'
import { KattContext } from '../context/KattContext'




export default function JatekTer(props) {


  return (
    <>
        {
            props.lista.map( (elem, index)=>{
                return (<Cella jel={elem} key={index} index={index}/>)
            })
        }
    </>
  )
}
