import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/4957412_Mobile-login-Cristin.png'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
const Login = () => {
  const navigate = useNavigate();
  const [error,setError]=useState('');

    const { signIn } = useContext(AuthContext)

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
          .then(result => {
            const user = result.user;
       
            console.log(user);
            navigate('/')

    
            event.target.reset()
    
          })
          .catch(error =>{
            console.log(error);
            setError(error.message)
          })
      }


    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:flex-row">
        <div className="w-1/2 mr-12 ">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='text-red-500 text-center'>{error}</p>

            <p className='my-4 text-center'>New user <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
<GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;