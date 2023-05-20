import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const detail = useLoaderData();
    console.log(detail);
    const{seller,price,customerName,url,details,email, categori,quantity,Rating  }=detail;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ml-96 mb-10 mt-10">
        <figure><img src={url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Toy name:{categori}</h2>
          <p>SellerName: {customerName}</p>
          <p>Email: {email}</p>
          <p>price: {price}</p>
          {/* <p>{img}</p> */}
          {/* <p>categori: </p> */}
          <p>available quantity:  {quantity}</p>
          <p>{seller}</p>
          <p>Rating: {Rating}</p>
         <p>description : {details}</p>
       
        </div>
      </div>
    );
};

export default ViewDetails;