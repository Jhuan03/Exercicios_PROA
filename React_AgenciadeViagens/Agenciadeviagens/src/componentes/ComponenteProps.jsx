import style from './css/ComponenteProps.module.css'

function ComponenteProps({lugar,texto,bandeira}){
    return(

        <div className={style.corpo_texto}>
            <h2>Venha conhecer esse lugar incrível {lugar}!!</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="Logo da firma" className={style.imagem_props}/>

        </div>


    )
}

export default ComponenteProps