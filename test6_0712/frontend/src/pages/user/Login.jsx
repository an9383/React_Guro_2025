import React, { useState } from 'react'
import { Input, Button, Card, Space } from 'antd'

const initialState = {
  username: '',
  password: '',
}

const Login = () => {
  const [state, setState] = useState(initialState);
  const {username, password} = state

  const handleLogin = () =>{

  }

  const goToRegister=()=>{

  }

  return (
    <div style={{
        height: '100vh', 
        display: "flex", 
        alignItems: "center",
        justifyContent: 'center',
        background: "#f0f2f5"
      }}>
      <Card title="로그인" style={{width: 400}}>
        <Input 
          placeholder='아이디'
          value={username}
          onChange={(e)=>setState(prev => ({...prev, username: e.target.value}))}
          style={{marginBottom: 16}}
        />
        <Input.Password
          placeholder='비밀번호'
          value={password}
          onChange={(e)=>setState(prev=> ({...prev, password:e.target.value}))}
          style={{marginBottom: 16}}
        />
       <Space direction='vertical' style={{width: '100%'}}>
          <Button type="primary" block onClick={handleLogin}>
            로그인
          </Button>
          <Button type="link" block onClick={goToRegister}>
            아직 회원이 아니신가요? 회원가입
          </Button>
       </Space>
      </Card>
    </div>
  )
}

export default Login