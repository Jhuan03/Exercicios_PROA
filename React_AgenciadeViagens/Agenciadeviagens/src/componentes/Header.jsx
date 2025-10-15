import {Link} from 'react-router-dom'
import styles from './css/Header.module.css'
import logo from '../assets/imagens/viagens.jpg'
import lupa from '../assets/imagens/lupa.png'

function Header(){
    return(

        <header>
             <img src={logo} alt="Logo da empresa" className={styles.img_viagens} />
             <nav className={styles.menu_header}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/Grand_Canyon'>Grand Canyon</Link>
                <Link to='/Muralhas_da_China'>Muralhas da China</Link>
                <Link to='/Aruba'>Aruba</Link>
             </nav>

             <div className={styles.busca}>
                <input type="search" />
             </div>

             <img src={lupa} alt="Lupinha" className={styles.img_lupa} />

        </header>


    )
}

export default Header