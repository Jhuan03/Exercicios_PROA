import style from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../assets/imagens/bandeiraescocia.png'

function Escocia(){
    return(

        <section className={style.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <ComponenteProps 
              lugar="Escócia"
              texto="A Escócia é um país de beleza única, marcada por montanhas imponentes, lagos misteriosos e castelos históricos. Suas paisagens naturais se misturam à rica cultura celta e à hospitalidade de seu povo, tornando cada região uma descoberta fascinante."
              bandeira={Bandeira_escocia}
              />
              

        </section>
    )
}

export default Escocia