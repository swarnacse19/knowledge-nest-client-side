import React from "react";
import animationData from "./Register.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

function Register() {
  return (
    <div className="hero bg-base-200 my-5 min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 400, height: 400 }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="mt-4 font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form className="card-body">
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
                type="text"
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

              {/* {error && <p className="text-red-600 text-xs">{error}</p>} */}

              <button type="submit" className="btn btn-neutral mt-4">
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
                // onClick={() => {
                //   signInWithGoogle()
                //     .then((result) => {
                //       toast.success("Signed in with Google successfully!");
                //       setTimeout(() => navigate("/"), 3000);
                //     })
                //     .catch((error) => {
                //       setError(error.message);
                //     });
                // }}
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
    </div>
  );
}

export default Register;
