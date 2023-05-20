import { Link } from "react-router-dom";

const AllToyRow = ({ booking }) => {
    const { customerName, _id, email, price, quantity, } = booking;



    // console.log(booking)
    return (
        <tr>
          
            <td>
                {/* <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div> */}
            </td>
            {/* <td>{categori}</td>  */}
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