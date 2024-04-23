import React from 'react'

interface PropsType {
    imageUrl: string
}

const Banner: React.FC<PropsType> = (props) => {

    return (
        <div>
            <img className='w-full h-96' src={props.imageUrl} alt="dog" />
        </div>
    )
}

export default Banner