import React from 'react'

const Nickname = () => {
    const handlechange = () => {
    
    }
  return (
    <>
        <div>
            <input type="text" placeholder="Enter your nickname" name="name"  onChange={handleChange} />
        </div>
        <div>
            <input type="text" placeholder="Enter your nickname" name="name"  onChange={handleChange} />
        </div>
        <div>
            <b>이름:</b>{name}
        </div>
        <div>
            <b>이름:</b>{nickname}
        </div>
    </>
  )
}

export default Nickname