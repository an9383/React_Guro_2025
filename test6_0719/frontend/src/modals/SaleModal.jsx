import React from 'react'
import { Modal, Input, Button, Select } from 'antd'

const SaleModal = ({open, onCancel}) => {
  return (
    <Modal
        title={null}
        open={open}
        onCancel={onCancel}
        footer={null}
        width={1100}
        centered
        closeIcon={false}
        style={{top: 30}}
    >
        <div>
            <Button onClick={onCancel}>취소</Button>
            <Button>등록</Button>
        </div>

    </Modal>
  )
}

export default SaleModal