import React from 'react';
import {Button, Space} from 'antd';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent:" space-between",
    padding: "0 24px",
    height: "100%", 
    backgoundColor: "#2c3e50",
    boxShadow: "0 2px 8px #f0f1f2",
}

const HeaderBar = () => {
  return (
    <div style={style}>
        <div style={{fontSize: "20px", fontWeight: "bold", color: "#1890ff"}}>
          MyLogo
        </div>
        <Space>
            <Button>
                로그인
            </Button>
            <Button>
              회원가입
            </Button>
        </Space>
    </div>
  )
}

export default HeaderBar