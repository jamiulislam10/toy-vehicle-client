import { Link } from "react-router-dom";
import img from '../../assets/4957412_Mobile-login-Cristin.png'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
    const [error,setError]= useState('')
    const [success,setSuccess]= useState('')
const {createUser} =useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo= form.photo.value;
        console.log(name,email,password,photo);
        setSuccess('')
        setError('')


        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Please add at least one uppercase')
            return  
        }



   createUser(email,password)
   .then(result =>{
    const user = result.user;
    console.log(user);
    setError('');
    event.target.reset();
    setSuccess('User has created Success')
   })
   .catch(error => {
    setError(error.message);
    
})
   
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                              
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-red-700'>{error}</p>
                <p className='text-blue-700'>{success}</p>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;