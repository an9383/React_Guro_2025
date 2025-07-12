import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/reducerSlices/productSlice';
import { AgGridReact } from 'ag-grid-react';
import { Typography, Spin, Alert } from 'antd';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const { Title } = Typography;

const ProductList = () => {
  const { loading, data, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const columnDefs = useMemo(() => [
    { headerName: '상품명', field: 'name', sortable: true, filter: true },
    { headerName: '가격', field: 'price', sortable: true, filter: true },
    { headerName: '분류', field: 'category', sortable: true, filter: true },
    {
      headerName: '재고',
      field: 'inStock',
      sortable: true,
      filter: true,
      cellRendererFramework: (params) => (
        <input type="checkbox" checked={params.value} disabled />
      )
    }
  ], []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <Title level={2}>상품 목록</Title>

      {loading && (
        <Spin tip="상품 데이터를 불러오는 중..." size="large" style={{ marginBottom: '2rem' }} />
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
        <Alert message="상품 데이터가 없습니다." type="info" showIcon />
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

export default ProductList;
