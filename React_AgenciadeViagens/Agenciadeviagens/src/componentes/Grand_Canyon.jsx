import style from './css/Grand_Canyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_grand from '../assets/imagens/bandeiragrand.png'


function Grand_Canyon(){
    return(

        <section className={style.fundo_grand_canyon}>
            <h1>Venha conhecer o Grand Canyon!</h1>
            <ComponenteProps 
            lugar="Grand Canyon"
            texto="O Grand Canyon impressiona com suas imensas formações rochosas coloridas e vistas de tirar o fôlego. Esculpido pelo rio Colorado, revela milhões de anos de história geológica em suas camadas. É um espetáculo natural único, símbolo da grandiosidade e beleza da natureza."
            bandeira={Bandeira_grand}
                          />

        </section>
    )
}

export default Grand_Canyon