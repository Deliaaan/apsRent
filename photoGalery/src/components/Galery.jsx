const Galery = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '350px 150px 150px',
      gridTemplateRows: '150px 150px',
      gap: '8px'
    }}>
      <div style={{ backgroundColor: '#a5fca9ff', padding: '20px', borderRadius: '8px', minHeight: '100px', gridRow: '1 / 3'}}>Card 1</div>
      <div style={{ backgroundColor: '#fca5a5', padding: '20px', borderRadius: '8px', minHeight: '100px' }}>Card 1</div>
      <div style={{ backgroundColor: '#50bdb7ff', padding: '20px', borderRadius: '8px', minHeight: '100px' }}>Card 1</div>
      <div style={{ backgroundColor: '#fca5d5ff', padding: '20px', borderRadius: '8px', minHeight: '100px' }}>Card 1</div>
      <div style={{ backgroundColor: '#fafca5ff', padding: '20px', borderRadius: '8px', minHeight: '100px' }}>Card 1</div>
    </div>
  )
}

export default Galery;