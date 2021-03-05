import React, { useState, useEffect } from 'react';


function ToyCard(props){
    // const {id, image, name} = props.toy // destructuring is an option


    const [active, setActive] = useState(false)

    const [timer, setTimer] = useState(0)
    
    useEffect(() => {

        const timerId = setInterval(() => {

            setTimer((passedTime) => {
               return passedTime + 1
            })

        }, 1000)
        return () => {clearInterval(timerId)}
    },[] )

    const handleHover = () => {

        setActive((prevActive) => prevActive ? false : true )
        // setActive((prevActive) => !prevActive )

    }

    return(
        <div className="card" id={`toy-${props.id}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <h4>{timer}</h4>
            <h2 className={ active ? "active" : "inactive" }>{props.name}</h2>
            <img src={props.image} className="toy-avatar"/>
            <p>{props.likes} Likes </p>
            <button className="like-btn">Like &lt;3</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default ToyCard