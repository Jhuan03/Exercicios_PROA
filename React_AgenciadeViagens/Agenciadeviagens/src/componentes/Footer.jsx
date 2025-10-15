import styles from './css/Footer.module.css'
import instagram from '../assets/imagens/insta.jfif'
import facebook from '../assets/imagens/face.jfif'
import tiktok from '../assets/imagens/tiktok.png'
import whatsapp from '../assets/imagens/whtas.png'

function Footer(){
    return(

        <footer className={styles.fundo_footer}>
            <h1 className={styles.texto_footer}>Siga-nos em nossas redes sociais</h1>
            <section className={styles.redes}>
                 <img src={instagram} alt="Logo instagram" className={styles.redes_sociais} />
                 <img src={facebook} alt="Logo facebook" className={styles.redes_sociais} />
                 <img src={tiktok} alt="Logo tiktok" className={styles.redes_sociais} />
                 <img src={whatsapp} alt="Logo whatsapp" className={styles.redes_sociais} />
            </section>
            <p className={styles.texto_footer}>Telefone de contato (11) 9555-3355</p>
        </footer>

    )
}

export default Footer