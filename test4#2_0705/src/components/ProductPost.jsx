import React from 'react';
import { Form, Input, InputNumber, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchPostProducts } from '../redux/reducerSlices/productPostSlice';

function ProductPost() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(fetchPostProducts(values));
  };

  return (
    <Form
      name="productPostForm"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name: '',
        price: null,
        category: '',
        inStock: false, // 초기 체크 상태
      }}
    >
      <Form.Item
        label="상품명"
        name="name"
        rules={[{ required: true, message: '상품명을 입력하세요.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="가격"
        name="price"
        rules={[{ required: true, message: '가격을 입력하세요.' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="분류"
        name="category"
        rules={[{ required: true, message: '분류를 입력하세요.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="재고"
        name="inStock"
        valuePropName="checked"
        rules={[{ required: true, message: '재고 여부를 선택하세요.' }]}
      >
        <Checkbox>재고 있음</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProductPost;
