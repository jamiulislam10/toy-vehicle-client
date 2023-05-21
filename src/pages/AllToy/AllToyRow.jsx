import { Link } from "react-router-dom";

const AllToyRow = ({ booking }) => {
    const { customerName, _id, email, price, quantity, } = booking;



    return (
        <tr>
          
            <td>
                
            </td>
            <td>{email}</td>
            <td>{customerName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>

                <Link to={`/details/${_id}`}><button className="btn btn-active btn-ghost">View details</button></Link>
            </th>
        </tr>
    );
};

export default AllToyRow;