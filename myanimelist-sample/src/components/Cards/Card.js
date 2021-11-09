import './Card.css'
// import { Link, Route } from 'react-router-dom';
const Card = (props) => {

    const style = {
        width: 120
    }

    return (
        <a href="/">
            <div class="card mx-1" style={style}>
                <img src={props.image_url}
                    alt="..." />
                <div class="mt-2">
                    <p class="text-center ellipsis">{props.title}</p>
                </div>
            </div>
        </a>

    )
};

export default Card;