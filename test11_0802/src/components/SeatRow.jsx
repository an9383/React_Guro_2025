// src/components/SeatRow.js
import Seat from './Seat';

const SeatRow = ({ rowId, seatsInRow }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      <div style={{ marginRight: '10px', width: '20px', textAlign: 'center', fontWeight: 'bold' }}>
        {rowId}
      </div>
      <div style={{ display: 'flex' }}>
        {seatsInRow.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </div>
    </div>
  );
};

export default SeatRow;
