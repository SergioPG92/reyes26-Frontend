import React, { useState } from "react";
import ComprobarRegaloComponent from "./ComprobarRegaloComponent";

type Props = {
  texto: string;
};

const MostrarContenidoComponent: React.FC<Props> = ({ texto }) => {
  // Estado para guardar el input del usuario
  const [nombre, setNombre] = useState("");
  // Estado para activar la búsqueda
  const [buscar, setBuscar] = useState(false);

  const handleBuscar = () => {
    // Solo activamos el componente al pulsar
    if (nombre.trim() !== "") {
      setBuscar(true);
    } else {
      alert("Por favor escribe tu nombre");
    }
  };

  return (
    <div className="divPreguntaNombre">
      <p className="parrafo">
        {texto}. Dime tu nombre para que busque tu regalo.
      </p>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button className="botonPregunta2" onClick={handleBuscar}>
        Buscar regalo
      </button>

      {/* Renderizamos el componente solo si se pulsa el botón */}
      {buscar && <ComprobarRegaloComponent texto={nombre} />}
    </div>
  );
};

export default MostrarContenidoComponent;
