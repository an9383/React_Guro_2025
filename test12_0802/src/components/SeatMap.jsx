// src/components/SeatMap.js
import React, { useEffect, useContext } from 'react';
import { SeatBookingContext} from '../contexts/SeatBookingContext';
import SeatRow from './SeatRow';

const SeatMap = () => {
  const { state, dispatch } = useContext(SeatBookingContext);
  const { seats, selectedSeats } = state;

  useEffect(() => {
    // 초기 좌석 데이터는 Provider에서 설정되므로 여기서는 생략
    // 필요 시 dispatch로 INITIALIZE_SEATS 액션을 호출
  }, []);

  // 좌석 데이터를 행별로 그룹화
  const seatsByRow = seats.reduce((acc, seat) => {
    //console.log("seat", seat)
    if (!acc[seat.rowId]) {
      acc[seat.rowId] = [];
    }
    acc[seat.rowId].push(seat);
    //console.log("acc", acc[seat.rowId])
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>CGV 좌석 선택</h2>
      <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>
        SCREEN
      </div>
      <div style={{ border: '1px dashed #666', padding: '10px', marginBottom: '20px', display: 'inline-block' }}>
        {Object.keys(seatsByRow).map((rowId) => {
              console.log(rowId)
              console.log(seatsByRow[rowId])
              return (
                <SeatRow key={rowId} rowId={rowId} seatsInRow={seatsByRow[rowId]} />
              )
            }
          )
        }
      </div>
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
        <h3>선택된 좌석:</h3>
        {selectedSeats.length > 0 ? (
          <p>{selectedSeats.map((s) => s.id).join(', ')}</p>
        ) : (
          <p>좌석을 선택해주세요.</p>
        )}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '20px', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginRight: '5px' }}></span>
          <span>선택 가능</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '20px', height: '20px', backgroundColor: '#4CAF50', borderRadius: '4px', marginRight: '5px' }}></span>
          <span>선택됨</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '20px', height: '20px', backgroundColor: '#ff5722', borderRadius: '4px', marginRight: '5px' }}></span>
          <span>예약 완료</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '20px', height: '20px', backgroundColor: '#9e9e9e', borderRadius: '4px', marginRight: '5px' }}></span>
          <span>비활성</span>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
