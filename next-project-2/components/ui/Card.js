import classes from './Card.module.css';
import Layout from '../layout/Layout';
function Card(props) {

  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card;
