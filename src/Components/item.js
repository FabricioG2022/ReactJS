import { NavLink } from "react-router-dom";

const Item = ({ info }) => {
    return (
        <NavLink to = '/item/:id' className="items">
            <img src={info.pictureUrl} alt="" />
            <p>{info.title}</p>
            <span>{info.price}</span>
            <button>+ INFO</button>
        </NavLink>
    );
}

export default Item;