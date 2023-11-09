import React from 'react'
import style from './secaointroducao.module.css'
import Botao from '../Botao';
import logo from '../../assets/images/logo.png'

export default function SecaoIntroducao() {
  return (
    <main className={style.conteudo__secao__introducao}>
        <img className={style.conteudo__secao__introducao__imagem} src={logo} alt="Imagem Logo" />
        <h2 className={style.conteudo__secao__introducao__titulo}>Aproveite Nossos <strong>Super Descontos</strong> Nas Compras Acima de 2 Potes</h2>
        <p className={style.conteudo__secao__introducao__subtitulo}>Já estamos no final do ano e se você ainda não está confortável com seu corpo, <strong>ASSISTA O VÍDEO ABAIXO</strong> que iremos te ajudar a emagrecer.</p>
        <iframe className={style.conteudo__secao__introducao__video} frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Lift Detox Black Como Funciona" src="https://www.youtube.com/embed/i7FCU51VQDU?controls=0&amp;rel=0&amp;playsinline=0&amp;showinfo=0&amp;modestbranding=0&amp;autoplay=&amp;enablejsapi=1&amp;"></iframe>
        <Botao>
            Continuar!
        </Botao>
    </main>
  )
}
