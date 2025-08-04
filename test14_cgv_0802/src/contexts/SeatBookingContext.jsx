// src/contexts/SeatBookingContext.js
import { createContext, useReducer } from 'react';
import { handleActions } from 'redux-actions';

// 좌석 상태
export const SEAT_STATUS = {
  AVAILABLE: 'available',
  SELECTED: 'selected',
  RESERVED: 'reserved',
  BLOCKED: 'blocked',
};

// 액션 타입
export const SELECT_SEAT = 'SELECT_SEAT';
export const DESELECT_SEAT = 'DESELECT_SEAT';
export const RESET_SEATS = 'RESET_SEATS';
export const INITIALIZE_SEATS = 'INITIALIZE_SEATS';

// Context 생성
export const SeatBookingContext = createContext();

// 좌석 데이터 생성 함수
const generateInitialSeats = (rows = 8, seatsPerRow = 12) => {
  const generatedSeats = [];
  for (let r = 0; r < rows; r++) {
    const rowId = String.fromCharCode(65 + r);
    for (let s = 1; s <= seatsPerRow; s++) {
      let status = SEAT_STATUS.AVAILABLE;
      if (s === Math.floor(seatsPerRow / 2) || s === Math.floor(seatsPerRow / 2) + 1) {
        status = SEAT_STATUS.BLOCKED;
      }
      generatedSeats.push({
        id: `${rowId}-${s}`,
        status,
        rowId,
        seatId: s,
      });
    }
  }
  //console.log("generatedSeats", generatedSeats)
  return generatedSeats;
};

// 초기 상태
const initialSeatState = {
  seats: generateInitialSeats(),
  selectedSeats: [],
};

// handleActions 리듀서 정의
const seatReducer = handleActions(
  {
    [INITIALIZE_SEATS]: (state, action) => ({
      ...state,
      seats: action.payload,
      selectedSeats: [],
    }),

    [SELECT_SEAT]: (state, action) => {
      const { rowId, seatId } = action.payload;
      const seatToSelectId = `${rowId}-${seatId}`;
      if (state.selectedSeats.find((s) => s.id === seatToSelectId)) {
        return state;
      }

      const newSeats = state.seats.map((seat) =>
        seat.id === seatToSelectId && seat.status === SEAT_STATUS.AVAILABLE
          ? { ...seat, status: SEAT_STATUS.SELECTED }
          : seat
      );

      return {
        ...state,
        seats: newSeats,
        selectedSeats: [...state.selectedSeats, { id: seatToSelectId, rowId, seatId }],
      };
    },

    [DESELECT_SEAT]: (state, action) => {
      const { rowId, seatId } = action.payload;
      const seatToDeselectId = `${rowId}-${seatId}`;

      const newSeats = state.seats.map((seat) =>
        seat.id === seatToDeselectId && seat.status === SEAT_STATUS.SELECTED
          ? { ...seat, status: SEAT_STATUS.AVAILABLE }
          : seat
      );

      return {
        ...state,
        seats: newSeats,
        selectedSeats: state.selectedSeats.filter((s) => s.id !== seatToDeselectId),
      };
    },

    [RESET_SEATS]: () => ({
      seats: generateInitialSeats(),
      selectedSeats: [],
    }),
  },
  initialSeatState
);

// Provider 컴포넌트
export const SeatBookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(seatReducer, initialSeatState);

  return (
    <SeatBookingContext.Provider value={{ state, dispatch }}>
      {children}
    </SeatBookingContext.Provider>
  );
};
