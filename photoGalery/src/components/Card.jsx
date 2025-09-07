
import Amenities from './Amenities';
import BedIcon from '../assets/bed.svg'

const Card = () => {
  return(
    <div>
      <div className='CardHeader' style={{
        display: 'inline-flex',
      }}>
        <h1>Renta de Departamento</h1>
        <h1>$6000 mensuales</h1>
      </div> 
      <div style={{
        display: 'inline-flex',
      }} >
        <div >
          <p>Ubicacion en tal lado</p>
          <p>av 5 de mayo san pedro martir</p> 
          <p> Ver Ubicacion </p>
        </div>
        <div>
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label=" 2 baños" />
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label="1" />
          <Amenities icon={() => <img src={BedIcon} alt="Bed" style={{ width: 32, height: 32 }} />} label="3" />
        </div> 
      </div>
    </div>
  )
}

export default Card;