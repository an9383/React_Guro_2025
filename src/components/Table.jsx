import { useState } from 'react';

const initialData = [
  {이름:"John", 국어: 90, 수학:89, 영어:95, 과학:89},
  {이름:"Peter", 국어: 90, 수학:89, 영어:95, 과학:89},
  {이름:"Sue", 국어: 90, 수학:89, 영어:95, 과학:89},
  {이름:"Susan", 국어: 90, 수학:89, 영어:95, 과학:89},
  {이름:"Jack", 국어: 90, 수학:89, 영어:95, 과학:89},
]

const Table = () =>{
  const [data, setData] = useState(initialData)
  return(
    <>
      <table>
        <tr>
          {Object.keys(data[0]).map((item)=>(<td>{item}</td>))}
        </tr>
        {data.map(item =>
          (
            <tr>
            <td>{item.이름}</td>
            <td>{item.국어}</td>
            <td>{item.수학}</td>
            <td>{item.영어}</td>
            <td>{item.과학}</td>
            </tr>
          )
        )
        }
      </table>
    </>
  )
}
// map함수는 리스트를 받아서 리스트로 반환해준다.
export default Table