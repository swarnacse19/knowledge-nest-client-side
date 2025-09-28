import React, { use, useContext, useState } from "react";
import animationData from "./Register.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!uppercasePattern.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercasePattern.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    } else {
      setError("");
    }

    //console.log(email, name, password, photo);

    createUser(email, password)
    .then(result =>{
      const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            setTimeout(() => navigate("/"), 3000);
          })
          .catch((error) => {
            setUser(user);
          });
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 350, height: 350 }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="mt-4 font-semibold text-[#773d30] text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="url"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              {error && <p className="text-red-600 text-xs">{error}</p>}

              <button type="submit" className="btn text-white bg-[#773d30] mt-4">
                Register
              </button>
              <div className="flex items-center gap-2 my-4">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="text-neutral-400 text-sm">OR</span>
                <hr className="flex-grow border-t border-gray-500" />
              </div>
              <button
                type="button"
                className="btn bg-white border-black"
                onClick={() => {
                  signInWithGoogle()
                    .then((result) => {
                      toast.success("Sign up with Google successfully!");
                      setTimeout(() => navigate("/"), 3000);
                    })
                    .catch((error) => {
                      setError(error.message);
                    });
                }}
              >
                <FcGoogle size={25} />
                Sign up with Google
              </button>
            </fieldset>
          </form>
          <p className="font-semibold my-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default Register;
