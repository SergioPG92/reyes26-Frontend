import React, { useState } from "react";
import MostrarContenidoComponent from "./MostrarContenidoComponent";

const HasSidoBuenoComponent: React.FC = () => {
  const [content, setContent] = useState("");

  return (
    <div>
    <div  className="divPregunta2">
 <button className="botonPregunta" onClick={() => setContent("¿Ah, con que sí has sido buena?")}>Sí!</button>
      <button className="botonPregunta" onClick={() => setContent("Vaya, tienes muy claro que has sido muy buena")}>Pues claro que sí!</button>
      <button className="botonPregunta" onClick={() => setContent("mal")}>No mucho :(</button>

      
      
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