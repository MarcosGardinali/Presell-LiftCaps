import React from 'react'
import style from './secaocomplementar.module.css'
import CardResultados from '../CardsResultados'
import Botao from '../Botao';
import { RiArrowDropRightLine } from 'react-icons/ri';

export default function SecaoComplementar() {
  return (
    <main className={style.conteudo__secao__compelentar}>
      <h3 className={style.conteudo__secao__compelentar__titulo}>Está preparada para emagrecer?</h3>
      <h4 className={style.conteudo__secao__compelentar__subtitulo}>Os próximos meses serão assim</h4>
      <section className={style.container__cards}>
        <CardResultados />
      </section>
      <h5 className={style.resultados__titulo}>Em 2023 Ajudamos Mais de <strong>189 Mil Pessoas</strong></h5>
      <section className={style.resultados}>
        <article className={style.resultados__textos__container}>
          <p className={style.resultados__textos}>Pessoas essas, que chegaram para a gente com todos os tipos de problemas como:</p>
          <p className={style.resultados__textos}> <RiArrowDropRightLine className={style.icon__size} color='#0F7E00' />Não conseguir emagrecer;</p>
          <p className={style.resultados__textos}> <RiArrowDropRightLine className={style.icon__size} color='#0F7E00' />Pessoas que tinham eventos importantes para ir e precisava emagrecer;</p>
          <p className={style.resultados__textos}> <RiArrowDropRightLine className={style.icon__size} color='#0F7E00' />Pessoas com alto grau de obesidade;</p>
          <p className={style.resultados__textos}> <RiArrowDropRightLine className={style.icon__size} color='#0F7E00' />Pessoas com metabolismo lento;</p>
          <p className={style.resultados__textos}> <RiArrowDropRightLine className={style.icon__size} color='#0F7E00' />Pessoas com ansiedade e várias outras coisas que você possa imaginar.</p>
        </article>
        <img className={style.resultados__imagem} src="https://liftdetoxcaps.com/wp-content/uploads/2022/05/Lift-Simulacao.jpg" alt="Imagem Resultados" />
      </section>
      <Botao>
        Quero Emagrecer Agora
      </Botao>
    </main>
  )
}
