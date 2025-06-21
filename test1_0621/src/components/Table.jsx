import React, {useState} from 'react'

const data = [
    {name:"john", kor:90, math: 89, eng:95},
    {name:"john", kor:90, math: 89, eng:95},
    {name:"john", kor:90, math: 89, eng:95},
]

const Td= ({scores}) => {
    <tr>
        <Td>나는 Td야{scores}</Td>
    </tr>
}

const Tr= ({scores}) => {
    <tr>
        <Td scores={scores}/>
    </tr>
}


const Table = () => {
    const [scores, setScores] = useState(data)
  return (
    <Table>
        {scores.map(item=>(<Tr item={item}/>))}
    </Table>
  )
}

export default Table