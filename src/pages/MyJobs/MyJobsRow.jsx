
const MyJobsRow = ({ job, handleDelete, }) => {
    const { email, _id, customerName, price, quantity } = job
    console.log(_id);

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
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">Update</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p className="py-4"> been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </td>

        </tr>
    );
};

export default MyJobsRow;