import React from "react";


  type Props = {
    texto: string;
  };

const ComprobarRegaloComponent: React.FC<Props> = ({ texto }) => {

  
    return <div className="divPreguntaNombre">
        {texto ==='ESTEFANÍA' ||texto ==='ESTEFANIA' ||texto ==='Estefanía' || texto ==='estefanía' || texto ==='Estefania' || texto ==='estefania' ? ( 
            <div className="divRegalo">
          <p className="parrafo">¡Felicidades {texto}!</p>
          <img src="/assets/recursos/regReyes.jpg" alt="Regalo de Estefanía" />
           </div>
        ) : ( 
          <p className="parrafo">Lo siento {texto}, no tienes regalo este año.</p>
        )}
    </div>
  };

export default ComprobarRegaloComponent;