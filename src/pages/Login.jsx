import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, doSignInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      console.log("Logged in:", userCredential.user);
      toast.success("Logged In successfully")
      navigate("/dashboard"); // redirect after login

    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google login:", result.user);
      toast.success("LoggedIn Successfully")
      navigate("/dashboard");

    } catch (error) {
      console.error("Google login failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">
            Log in to continue trading simulation
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <HiOutlineMail className="absolute left-3 top-2.5 text-gray-400 text-lg" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <IoEyeOutline className="text-lg" />
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot your password?
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <span className="absolute left-0 w-full border-t border-gray-300"></span>
          <span className="bg-white px-2 text-gray-400 text-sm">
            or continue with
          </span>
        </div>

        {/* Social logins */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <FcGoogle className="mr-2 text-lg" /> Continue with Google
          </button>
        </div>

        {/* Signup link */}
        <div className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
