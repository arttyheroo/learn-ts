import React from 'react'

interface PropsType {
    man: string
}

const Titls: React.FC<PropsType> = (props) => {
  return (
    <h1 className='text-center text-5xl my-4'>{props.man}</h1>
  )
}

export default Titls