import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

  const {
    onSentApi,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSentApi();
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>PaineirasTech</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Olá, </span>
          </p>
          <p>Como posso lhe ajudar hoje?</p>
        </div>
        {!showResult ? (
          <>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick('Sugestões de produtos e pedidos')}>
                <p>Sugestões de produtos e pedidos</p>
              </div>
              <div className="card" onClick={() => handleCardClick('Informações sobre entrega e pagamentos')}>
                <p>Informações sobre entrega e pagamentos</p>
              </div>
              <div className="card" onClick={() => handleCardClick('Localização e contato da Granja Paineiras')}>
                <p>Localização e contato da Granja Paineiras</p>
              </div>
              <div className="card" onClick={() => handleCardClick('Sobre a Granja Paineiras e nossa história')}>
                <p>Sobre a Granja Paineiras e nossa história</p>
              </div>
            </div>
             
            {/* Fim dos Cards - mostra se nao tiver resultado */}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.dummy_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.user_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        {/* Fim mostra resultado */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Entre com sua pergunta aqui"
            />
            <div>
              <img onClick={() => onSentApi()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            PaineirasTech utiliza uma base de dados própria com
            pesquisa gerada através de embeddings do Gemini. Algumas informações
            podem ser incorretas, sempre verifique as fonte recomendadas.
            <br />
            Desenvolvido por:
            <span className="dev-name"> Guilherme </span>
            <a href="https://github.com/guilhermehenrsilva" target="_blank" rel="noopener noreferrer">
              <img src={assets.github_icon} alt="GitHub" className="dev-icon" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-henrique1997" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" className="dev-icon" />
            </a>
            <span className="dev-name"> Gabriel </span>
            <a href="https://github.com/gabrielcaproni" target="_blank" rel="noopener noreferrer">
              <img src={assets.github_icon} alt="GitHub" className="dev-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-pegoraro-345947265" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" className="dev-icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
