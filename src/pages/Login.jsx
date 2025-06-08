import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import animationData from "./Login.json";
import { FcGoogle } from 'react-icons/fc';

function Login() {
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
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-black mb-5">
              Login Here
            </h2>
            <form >
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                //ref={emailRef}
                className="input mb-5"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input mb-5"
                placeholder="Password"
              />
              <div >
                <a className="link link-hover text-neutral-400 font-semibold">
                  Forgot password?
                </a>
              </div>

              {/* {error && <p className="text-red-600 text-xs">{error}</p>} */}

              <button
                type="submit"
                className="btn bg-black text-white font-semibold text-xl mt-4 w-full"
              >
                Login
              </button>
              <div className="flex items-center gap-2 my-4">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="text-neutral-400 text-sm">OR</span>
                <hr className="flex-grow border-t border-gray-500" />
              </div>
              <button
                type="button"
                className="btn bg-white w-full text-black border-black hover:bg-gray-300"
                // onClick={() => {
                //   signInWithGoogle()
                //     .then((result) => {
                //       toast.success("Signed in with Google!");
                //       setTimeout(
                //         () =>
                //           navigate(`${location.state ? location.state : "/"}`),
                //         3000
                //       );
                //     })
                //     .catch((error) => {
                //       setError(error.message);
                //     });
                // }}
              >
                <FcGoogle size={25} />
                Login with Google
              </button>
            </form>
            <p className="font-semibold mt-5 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-700">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;