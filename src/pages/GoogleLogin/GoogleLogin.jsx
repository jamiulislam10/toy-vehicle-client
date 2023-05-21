import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const navigate = useNavigate();

    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;

                console.log(loggedInUser.user)

                navigate('/')

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">

            <div className="social-button-container w-55 mt-3">
        <img
          onClick={handleGoogleSignIn}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div> 
            </div>
        </div>
    );
};

export default GoogleLogin;