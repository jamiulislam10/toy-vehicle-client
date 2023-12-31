

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import Swal from 'sweetalert2/dist/sweetalert2.js'

import Swal from 'sweetalert2'

const Categories = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://toy-vehicle-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const { title, _id, price, img, quantity, rating,  details } = bookings;

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price= form.price.value;
        const url = form.url.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const categori = form.categori.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            url,
            service: title,
            service_id: _id,
            price: price,
            quantity: quantity,
            rating: rating,
            categori: categori,
            
        }

        console.log(booking);
        fetch('https://toy-vehicle-server.vercel.app/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    return (
        <div>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture url</span>
                        </label>
                        <input type="img" name="url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub category</span>
                        </label>
                        <input type="text" name="categori"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details description</span>
                        </label>
                        <input type="text" name=" details" defaultValue={ details} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default Categories;