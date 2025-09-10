
import Amenities from './Amenities';
import Galery from './Galery';
import BedIcon from '../assets/bed.svg'


const Card = () => {
  return(
    <div style={{
      backgroundColor: '#c9c9c9ff',
      padding: '20px', 
      margin: '10px',
      borderRadius: '20px'
    }}>
      {/* Header con space-between */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',  // ← AGREGAR ESTO
        alignItems: 'flex-start',
        marginBottom: '15px'              // ← AGREGAR ESTO
      }}>
        <h1 style={{ margin: 0 }}>Renta de Departamento</h1>
        <h1 style={{ margin: 0, textAlign: 'right' }}>$6000 mensuales</h1>
      </div> 
      
      {/* Contenido con mejor alineación */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',  // ← AGREGAR ESTO
        alignItems: 'flex-start',
        marginBottom: '20px'              // ← AGREGAR ESTO
      }}>
        <div style={{ flex: 1 }}>
          <p>Ubicacion en tal lado</p>
          <p>av 5 de mayo san pedro martir</p> 
          <a href="#">Ver Ubicacion</a>
        </div>
        
        {/* Amenities horizontales */}
        <div style={{
          display: 'flex',              // ← AGREGAR ESTO
          gap: '8px'                    // ← AGREGAR ESTO
        }}>
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label="2 " />
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label="2 " />
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label="2 " />
        </div> 
      </div>

      <div>
        <Galery/>
      </div>
    </div>
  )
}

export default Card;