// src/components/Seat.js
import { useContext } from 'react';
import { SELECT_SEAT, DESELECT_SEAT, SEAT_STATUS, SeatBookingContext } from '../contexts/SeatBookingContext'; // 액션 타입 및 상태 상수

const Seat = ({ seat }) => {
  const { dispatch } = useContext(SeatBookingContext); // Context에서 dispatch 함수 직접 가져오기

  const handleClick = () => {
    if (seat.status === SEAT_STATUS.AVAILABLE) {
      dispatch({ type: SELECT_SEAT, payload: { rowId: seat.rowId, seatId: seat.seatId } });
    } else if (seat.status === SEAT_STATUS.SELECTED) {
      dispatch({ type: DESELECT_SEAT, payload: { rowId: seat.rowId, seatId: seat.seatId } });
    }
    // RESERVED 또는 BLOCKED 좌석은 클릭해도 아무 일도 일어나지 않음
  };

  const getSeatStyle = () => {
    switch (seat.status) {
      case SEAT_STATUS.AVAILABLE:
        return { backgroundColor: '#e0e0e0', cursor: 'pointer' };
      case SEAT_STATUS.SELECTED:
        return { backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' };
      case SEAT_STATUS.RESERVED:
        return { backgroundColor: '#ff5722', color: 'white', cursor: 'not-allowed' };
      case SEAT_STATUS.BLOCKED:
        return { backgroundColor: '#9e9e9e', cursor: 'not-allowed' };
      default:
        return { backgroundColor: '#e0e0e0', cursor: 'pointer' };
    }
  };

  return (
    <div
      style={{
        width: '35px',
        height: '35px',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2px',
        borderRadius: '4px',
        fontSize: '0.8em',
        fontWeight: 'bold',
        ...getSeatStyle(),
      }}
      onClick={handleClick}
    >
      {seat.seatId}
    </div>
  );
};

export default Seat;
