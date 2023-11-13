import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://bit.ly/3QA9EZA" className={style.botao}>{children}</a>
  )
}