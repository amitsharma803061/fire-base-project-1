import { Link } from "react-router";
import MyContainer from "../components/MyContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("SignIn Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("SignIn Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGithubSignin = () => {};

  const handleForgetPassword = () => {};

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(user);

  // console.log();

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            {/* conditional rendaring */}

            {user ? (
              <div className="text-center space-y-3">
                <img
                  src={user?.photoURL || "https://vai.placeholder.com/88"}
                  alt=""
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <h2 className="text-white/80">{user?.email}</h2>
                <button onClick={handleSignOut} className="btn text-red-500">
                  Sign Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleSignin} className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                  Sign In
                </h2>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                <div className="space-y-2">
                  <button
                    className="hover:underline cursor-pointer"
                    onClick={handleForgetPassword}
                    type="button"
                  >
                    Forget password?
                  </button>

                  <button
                    type="submit"
                    className="my-btn w-full h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
                  >
                    Login
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                {/* Github Signin */}
                <button
                  type="button"
                  onClick={handleGithubSignin}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Github
                </button>

                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signin;
