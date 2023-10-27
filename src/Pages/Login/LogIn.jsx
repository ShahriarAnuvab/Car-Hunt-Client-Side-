import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
  const {signIn, googleLogIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleLogIn = ()=>{
    googleLogIn()
    .then(result=>toast.success("Successfully Login"))
    .catch(err => toast.error("error occured"))
    navigate(location.state? location.state : "/")
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    signIn(email, password)
    .then(result => {
      toast.success("Successfully Login")
      navigate(location.state? location.state : "/")
      
    })
    .catch(err => {
      toast.error("User Not Valid")

    })
  };
  return (
    <div>
      <div>
        <div className="container mx-auto">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to="/registration">
                  {" "}
                  <a className="label-text-alt link link-hover">
                    Register Here
                  </a>
                </Link>
              </label>
            </div>
            <div className=" mt-6">
              <button className="btn outline-none border-none">Login</button>
            </div>
            <div className=" mt-6 flex ">
              <button className="btn  text-white  outline-none border-none" onClick={handleGoogleLogIn}>
                {" "}
                <FcGoogle></FcGoogle>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
