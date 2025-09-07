
const Amenities = ({ icon: Icon, label }) => {
  return (
    <div style={{
      margin: '5px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#9bffa8ff', // Verde claro como la imagen
      borderRadius: '30px',
      padding: '8px 16px'
    }}>
      <Icon style={{ width: 24, height: 24, color: '#065f46' }} />
      <span style={{ 
        fontFamily: "'Roboto', Arial, sans-serif",
        color: '#112015ff',
        fontSize: '30px',
        fontWeight: 'bold'
      }}>
        { label }
      </span>
    </div>
  );
};

export default Amenities;