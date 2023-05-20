import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import logo from '../../../assets/supply-chain-representation-with-yellow-truck (1).png'

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut= () =>{
    logOut()
    .then(()=>{
    })
    .catch(error => console.log(error))
    }
    
        const navsItem = <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blogs</Link></li>
            <li><Link to='/bookings'>All toy</Link></li>
        {user?.email ? <>
         <li><Link to='/mytoy'>My toy</Link></li>
            <li><Link to='/adtoy'>Add a toy</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full" title={user?.displayName}>
                                <img src={user?.photoURL} />
                            </div>
                        </label>
         </>
        :
        <li><Link to='/login'>Login</Link></li>
       }
        </>


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navsItem}
                </ul>
            </div>
{/* <img src={logo} alt="" /> */}
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navsItem}               
                 </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Toy vehicle</button>            </div>
    </div>
    );
};

export default NavBar;