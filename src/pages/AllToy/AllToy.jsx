import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import AllToyRow from './AllToyRow';

const AllToy = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?id=${user._id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    })


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                           
                            <th>Email</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details button</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <AllToyRow
                                key={booking._id}
                                booking={booking}
                            // handleDelete={handleDelete}

                            ></AllToyRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToy;