// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

const MyJobsRow = ({ job, handleDelete, }) => {
    const { email, _id, customerName, price, quantity } = job
    console.log(job);
    console.log(_id);
    // const { user } = useContext(AuthContext);

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>

            <td>{email}</td>
            <td>{customerName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
     <Link to={`/update/${_id}`}><button>Update</button></Link>




     
            </td>

        </tr>
    );
};

export default MyJobsRow;