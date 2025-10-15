import style from './css/Muralhas_da_China.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_china from '../assets/imagens/bandeirachina.png'


function Muralhas_da_China(){
    return(

        <section className={style.fundo_muralhas_da_china}>
            <h1>Venha conhecer as Muralhas da China!</h1>
            <ComponenteProps 
             lugar="Muralhas da China"
             texto="As Muralhas da China impressionam pela grandiosidade e pela história que carregam, serpenteando montanhas e vales por milhares de quilômetros. São um símbolo de força, resistência e engenhosidade humana. Sua beleza monumental atrai visitantes do mundo todo."
             bandeira={Bandeira_china}/>

        </section>
    )
}

export default Muralhas_da_China