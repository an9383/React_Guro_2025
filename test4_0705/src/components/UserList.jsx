import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUsers} from '../redux/reducerSlices/userSlice'

const UserList = () => {
    const {loading, data, error} = useSelector(state => state.users)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
  return (
    <>
    <h1>사용자 목록</h1>
    {loading && <p>사용자 데이터를 불러오는 중...</p>}
    {error && <p>에러 발생:{error}</p>}
    {!loading && data.length===0&& <p>사용자 데이터가 없습니다.</p>}
    <ul>
        {data.map(user=>(
            <li key={user.id}><strong>{user.name}</strong>({user.age}세, {user.city})</li>
        ))}
    </ul>
    </>
    
  )
}



export default UserList