import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Página de contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div className={styles.dados}>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>giovannerolo@gmail.com</li>
          <li>(99) 9 9999-9999</li>
          <li>Rua Ali Perto</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
