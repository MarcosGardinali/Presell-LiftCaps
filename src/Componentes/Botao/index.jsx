import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://ev.braip.com/ref?pv=pro3yoz3&af=afineolgnp" className={style.botao}>{children}</a>
  )
}