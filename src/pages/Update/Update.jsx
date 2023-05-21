import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    useEffect(() => {
        document.title = 'Toy Vehicle| Update';
    }, [])
    const loadedUser = useLoaderData()
    console.log(loadedUser);

const handleUpdate =event =>{
    event.preventDefault();
    const form =event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name,email);
    const updatedUser = {name,email}


    fetch(`https://toy-vehicle-server.vercel.app/mybookingss/${loadedUser._id}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedUser)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if (data.modifiedCount > 0) {
            alert('user updated successfully')
        }
    })
}




    return (
        <div>


<div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:flex-row">
        <div className="w-1/2 mr-12 ">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"  defaultValue={loadedUser?.email} name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"  defaultValue={loadedUser?.name} name='name' className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="Price"  defaultValue={loadedUser?.name} name='name' className="input input-bordered" />
               
              </div>
            
              <div className="form-control mt-6">
                <button className="btn btn-primary">update</button>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>




        </div>
    );
};

export default Update;