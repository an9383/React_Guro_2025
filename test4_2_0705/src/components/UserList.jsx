import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/reducerSlices/userSlice';
import { AgGridReact } from 'ag-grid-react';
import { Typography, Spin, Alert } from 'antd';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const { Title } = Typography;

const UserList = () => {
  const { loading, data, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const columnDefs = useMemo(() => [
    { headerName: '이름', field: 'name', sortable: true, filter: true },
    { headerName: '나이', field: 'age', sortable: true, filter: true },
    { headerName: '도시', field: 'city', sortable: true, filter: true },
    { headerName: '이메일', field: 'email', sortable: true, filter: true },
  ], []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <Title level={2}>사용자 목록</Title>

      {loading && (
        <Spin tip="사용자 데이터를 불러오는 중..." size="large" style={{ marginBottom: '2rem' }} />
      )}

      {error && (
        <Alert
          message="에러 발생"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: '2rem' }}
        />
      )}

      {!loading && rowData.length === 0 && (
        <Alert message="사용자 데이터가 없습니다." type="info" showIcon />
      )}

      {!loading && rowData.length > 0 && (
        <div className="ag-theme-alpine" style={{ height: 400, width: '800px' }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={5}
            animateRows={true}
            modules={[ClientSideRowModelModule]}
          />
        </div>
      )}
    </div>
  );
};

export default UserList;
