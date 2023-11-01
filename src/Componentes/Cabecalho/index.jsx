import React from 'react'
import style from './cabecalho.module.css'
import { LuTag } from 'react-icons/lu';


export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <LuTag color='#FFFFFF' size={25}/>
      <h1 className={style.cabecalho__titulo}>Nunca foi tão barato emagrecer. Aproveite nosso super descontos nas compras acima de 2 potes!</h1>
    </header>
  )
}
