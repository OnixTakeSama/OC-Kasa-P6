import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <article className="card">
        <NavLink to={`/logement/${props.id}`}>
            <img src={props.cover} alt={props.title} className="card-cover"/>
        </NavLink>
        <div className="card-title">{props.title}</div>
    </article>
  );
}

export default Card;