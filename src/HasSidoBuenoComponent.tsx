import React, { useState } from "react";
import MostrarContenidoComponent from "./MostrarContenidoComponent";

const HasSidoBuenoComponent: React.FC = () => {
  const [content, setContent] = useState("");

  return (
    <div>
    <div  className="divPregunta2">
 <button className="botonPregunta" onClick={() => setContent("¿Ah, con que sí has sido buena?")}>Sí! <i className="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i></button>
      <button className="botonPregunta" onClick={() => setContent("Vaya, tienes muy claro que has sido muy buena")}>Pues claro que sí! <i className="em em-smiley" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH"></i></button>
      <button className="botonPregunta" onClick={() => setContent("mal")}>No mucho <i className="em em-worried" aria-role="presentation" aria-label="WORRIED FACE"></i></button>

      
      
    </div>
     {content === "mal" ? (
        <p className="parrafo">
          Vaya... entonces no hay regalos este año. Portate bien y el año que viene seguro que tendrás!
        </p>
      ) : content !== "" ? (
        <MostrarContenidoComponent texto={content} />
      ) : null}
    </div>
  );
};

export default HasSidoBuenoComponent;