// import { Link, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = (props) => {
    const style = {
        width: 120
    }
    return (
        <>
        <Link to={`/anime-detail/${props.id}`}>
            <div class="card mx-1" style={style}>
                <img src={props.image_url}
                    alt="..." />
                <div class="mt-2">
                    <p class="text-center ellipsis">{props.title}</p>
                </div>
            </div>
        </Link>
        </>
    )
};

export default Card;