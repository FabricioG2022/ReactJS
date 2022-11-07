import { Link } from "react-router-dom";

const Item = ({ info }) => {
    return (
        <Link to = {`/item/detalleId/${info.id}`} className="items">
            <img src={info.pictureUrl} alt="" />
            <p>{info.title}</p>
            <span>{info.price}</span>
            <button>+ INFO</button>
        </Link>
    );
}

export default Item;