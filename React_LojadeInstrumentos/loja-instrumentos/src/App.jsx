import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#cards">Instrumentos</a></li>
            <li><a href="#Endereco">Endereço</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre">
        <div className="container">
          <div className="textoSobre">
            <h1>Nossa Loja - Instrumentos Musicais</h1>
            <p>
              Se você é um amante da música e busca instrumentos musicais de
              qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra
              violões, guitarras, teclados, pianos, contrabaixos e muito mais.
              Escolha seus favoritos e receba em casa com toda a comodidade.
            </p>
          </div>
          <div className="imagemSobre">
            <img src="/img_04.jpg" alt="loja" />
          </div>
        </div>
      </section>

      <section id="cards">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="card">
            <img src="/img_02.jpg" alt="Violão" />
            <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL</p>
            <span>R$ 998,50</span>
          </div>
        ))}
      </section>

      <section id="EnderecoContato">
        <section id="Endereco">
          <div className="mapa">
            <img src="/img_05.png" alt="Mapa" />
          </div>
          <div className="textoMapa">
            <h1>Nossa Loja - Instrumentos Musicais</h1>
            <p>
              Está situada na Rua Tito, 54 - Pompéia, próxima ao teatro Cacilda
              Becker, com uma ampla variedade de instrumentos e ambiente
              agradável para toda a família.
            </p>
          </div>
        </section>

        <section id="Contato">
          <div className="formulario">
            <p>Entre com seu nome:</p>
            <input type="text" placeholder="Digite seu nome aqui" />
            <p>Entre com seu e-mail:</p>
            <input type="text" placeholder="Digite seu email aqui" />
            <input
              type="text"
              id="inputTexto"
              placeholder="Faça seu pedido aqui"
            />
            <input type="button" value="Enviar" />
          </div>

          <div className="redes">
            <h1>Acesse também nossas redes sociais:</h1>
            <img src="/img_06.png" alt="WhatsApp" />
            <img src="/img_03.png" alt="Instagram" />
            <img src="/img_00.png" alt="Facebook" />
          </div>
        </section>
      </section>

      <section id="footer">
        <h1>Nossa Loja - Instrumentos Musicais</h1>
        <p>Rua Tito, 54 - Lapa</p>
        <p>São Paulo - Brasil</p>
        <div className="imagens">
          <img src="/img_06.png" alt="WhatsApp" />
          <img src="/img_03.png" alt="Instagram" />
          <img src="/img_00.png" alt="Facebook" />
        </div>
      </section>
    </>
  );
}
