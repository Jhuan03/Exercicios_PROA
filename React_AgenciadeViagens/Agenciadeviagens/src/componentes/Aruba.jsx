import style from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_aruba from '../assets/imagens/bandeiraaruba.png'


function Aruba(){
    return(

        <section className={style.fundo_aruba}>
            <h1>Venha conhecer Aruba!</h1>
            <ComponenteProps
            lugar="Aruba"
            texto="Aruba encanta com suas praias de areia branca, mar turquesa e clima ensolarado o ano todo. A ilha combina belezas naturais, hospitalidade calorosa e cultura vibrante. É um paraíso caribenho perfeito para relaxar e se encantar."
            bandeira={Bandeira_aruba} />

        </section>
    )
}

export default Aruba