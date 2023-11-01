import React from 'react'
import style from './cardresultados.module.css'

export default function CardResultados() {
    return (
        <section className={style.card__container}>
            <section className={style.card}>
                <img className={style.card__imagem} src="https://liftdetoxcaps.com/wp-content/uploads/2022/05/L1.png" alt="Imagem" />
                <p className={style.card__texto}>Não vai ter vergonha de usar um biquíni na praia.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src="https://liftdetoxcaps.com/wp-content/uploads/2022/05/L2.png" alt="Imagem" />
                <p className={style.card__texto}>Seu marido vai se sentir mais atraído por você.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src="https://liftdetoxcaps.com/wp-content/uploads/2022/05/L3.png" alt="Imagem" />
                <p className={style.card__texto}>Vai ser um mulher que vai sorrir mais.</p>
            </section>
            <section className={style.card}>
                <img className={style.card__imagem} src="https://liftdetoxcaps.com/wp-content/uploads/2022/05/L4.png" alt="Imagem" />
                <p className={style.card__texto}>Vai conseguir usar roupas mais justas.</p>
            </section>
        </section>
    )
}
