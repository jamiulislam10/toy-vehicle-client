import { useLoaderData } from "react-router-dom";

const Update = () => {
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
<form onSubmit={handleUpdate}>

<input className="text-black" type="text" defaultValue={loadedUser?.name} name="name" id="" />
<br />
<input type="email" defaultValue={loadedUser?.email} name="email" id="" />
<br />
<input type="submit" value="update" />

</form>

        </div>
    );
};

export default Update;