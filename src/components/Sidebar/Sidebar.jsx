import  { useContext, useState } from "react"; // Importe useState
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const { newChat } = useContext(Context);
  const [extended, setExtended] = useState(true); // Estado para controlar se a sidebar está estendida ou minimizada

  return (
    <div className={`sidebar ${extended ? '' : 'minimized'}`}> {/* Adiciona a classe 'minimized' se não estiver estendida */}
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)} // Alterna o estado extended ao clicar no ícone de menu
          className="menu"
          src={assets.menu_icon}
          alt="Ícone de menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Ícone de mais" />
          {extended ? <p>Novo Chat</p> : null} {/* Só mostra o texto se estiver estendida */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;