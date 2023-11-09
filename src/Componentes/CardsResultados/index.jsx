import React from 'react'
import style from './cardresultados.module.css'
import imagem1 from '../../assets/images/imagem1.png'
import imagem2 from '../../assets/images/imagem2.png'
import imagem3 from '../../assets/images/imagem3.png'
import imagem4 from '../../assets/images/imagem4.png'

export default function CardResultados() {
    return (
        <section className={style.card__container}>
            <section className={style.card}>
                <img className={style.card__imagem} src={imagem1} alt="Imagem" />
                <p className={style.card__texto}>Não vai ter vergonha de usar um biquíni na praia.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src={imagem2} alt="Imagem" />
                <p className={style.card__texto}>Seu marido vai se sentir mais atraído por você.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src={imagem3} alt="Imagem" />
                <p className={style.card__texto}>Vai ser um mulher que vai sorrir mais.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src={imagem4} alt="Imagem" />
                <p className={style.card__texto}>Vai conseguir usar roupas mais justas.</p>
            </section>
        </section>
    )
}
