import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJobsRow from "./MyJobsRow";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/mybookings/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setJobs(data);
        });
    }, [user]);


    const handleDelete= id =>{
      const proceed = confirm('Are you sure you want to delete');
      if(proceed){
          fetch(`http://localhost:5000/mybookings/${id}`,{
              method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.deletedCount >0){
                alert('deleted successfully') ;
                const remaining = jobs.filter(booking=> booking._id !== id) 
              setJobs(remaining)
              }
          })
      }
  }
    return (
      <div>
      <h1>Your bookings: {jobs.length}</h1>

      <div className="overflow-x-auto">
          <table className="table table-compact w-full">
              <thead>
                  <tr>
                    
                      <th>Email</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Available Quantity</th>
                  

                  </tr>
              </thead>
              <tbody>

                {
                  jobs.map(job=> <MyJobsRow
                  key={job._id}
                  job={job}
                  handleDelete={handleDelete}
                  ></MyJobsRow>)
                }

              </tbody>

          </table>
      </div>
  </div>
    );
};

export default MyJobs;