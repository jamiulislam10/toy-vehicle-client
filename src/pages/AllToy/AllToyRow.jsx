
const AllToyRow = ({booking}) => {
const {customerName,_id,email,price,quantity}=booking;


const handleDelete= id =>{
    const proceed = confirm('Are you sure you want to delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
              alert('deleted successfully')  
            }
        })
    }
}
// console.log(booking)
    return (
        <tr>
            <th> <th>
            <button  onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th></th>
        <td>{customerName}</td> 
        <td>{email}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        {/* <td>{category}</td>  */}
        <th>
            
                <button className="btn btn-active btn-ghost">View details</button>
        </th>
      </tr>
    );
};

export default AllToyRow;