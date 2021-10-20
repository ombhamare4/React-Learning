import React from 'react'
// import style from 'styled-components'

// const Button = styled.button`` //tag template litrel 

const Button = (props) => {
    return (
        <div className="text-end">
            <button type={props.type} onClick={props.onClick} className="btn btn-primary">{props.children}</button>
        </div>
    )
};

export default Button;