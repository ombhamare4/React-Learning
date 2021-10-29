import React from 'react'

const Card =(props) => {
    return(
        <div className="container  mt-5 bg-dark text-white p-2 border rounded-3 ">
        {props.children}
        </div>
    );
}

export default Card;