import './PoliticaBlock.css'

const PoliticaBlock = () => {
  return (
  	<div className="politicalMain">
    <div className="politicaBlockMain">
    <h2> Lo que debes saber </h2> 
    <div className="politicaBlock">  
      <div className="column">
        <h3>Normas de los tours</h3>
        <ul> 
        	<li> Sigue las instrucciones del guía turístico en todo momento. </li>
        	<li> Mantén un comportamiento respetuoso hacia los demás participantes del tour. </li>
        	<li> Respeta las normas culturales y costumbres locales del lugar que estás visitando. </li>
        	<li> No te desvíes del grupo sin autorización o sin notificar al guía. </li>
        	<li> Respeta los horarios establecidos y sé puntual en las reuniones o puntos de encuentro. </li>
        </ul>
      </div>
      <div className="column line">
        <h3>Salud y seguridad</h3>
        <ul> 
        	<li> Verificar la disponibilidad de servicios médicos de emergencia en la zona a visitar. </li>
        	<li> Informar sobre cualquier condición médica relevante al guía o líder del tour.</li>
        	<li> Seguir las normas de seguridad establecidas, como el uso de equipo de protección personal si es necesario. </li>
        	<li> Estar preparado para posibles cambios en el itinerario debido a condiciones climáticas u otras circunstancias imprevistas. </li>
        </ul>
      </div>
      <div className="column line">
        <h3>Política de cancelación</h3>
        <ul> 
        	<li> Cancelación con aviso previo: Si decides cancelar tu reserva con al menos 48 horas de anticipación al inicio del tour, te reembolsaremos el 100% del monto pagado. </li>
        	<li> No presentación: En caso de no presentarte en la fecha y hora programada para el tour sin previo aviso, no se realizará ningún reembolso. </li>
        	<li> Cambios en la reserva: Si deseas realizar cambios en tu reserva, como modificar la fecha o el número de participantes, debes notificarnos con al menos 48 horas de anticipación y estaremos sujetos a disponibilidad. </li>
        	
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default PoliticaBlock;
