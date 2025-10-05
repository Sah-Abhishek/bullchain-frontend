import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { doCreateUserWithEmailAndPassword, doSigninWithGoogle } from "../firebase/auth.js";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const avalibility = await axios.get(`${apiUrl}/auth/check-username`, {
        params: { username: username.toLowerCase() }
      })

      if (!avalibility.data.available) {
        setError("Username already taken");
        setLoading(false);
        return

      }
      //create user crediential in firebase
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      const firebaseUser = userCredential.user;

      const response = await axios.post(`${apiUrl}/auth/register`, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        fullName,
        username: username.toLowerCase(),

      })

      if (response.status === 201) {
        toast.success("User created successfully")
      }



      // ✅ user created

      // You could update profile here:
      // await updateProfile(user, { displayName: fullName });

      console.log("User created:", firebaseUser);
    } catch (err) {
      toast.error("Error creating user");
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      const result = await doSigninWithGoogle();
      const firebaseUser = result.user;


      const generatedUsername = firebaseUser.email.split("@")[0].toLowerCase();
      const availability = await axios.get(`${apiUrl}/auth/check-username`,
        {
          params: { username: generatedUsername }
        }
      )


      let finalUsername = generatedUsername;
      if (!availability.data.availible) {
        // falback if taken
        finalUsername = generatedUsername + "_" + Math.floor(Math.random() * 1000);

      }
      // save to backend
      const response = await axios.post(`${apiUrl}/auth/register`, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        fullName: firebaseUser.displayName,
        username: finalUsername
      });

      if (response.status === 201) {
        toast.success("SignedUp successfully");
      }

    } catch (error) {
      console.error(error)
      setError(error.message);

    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Start trading smarter — risk free.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a unique username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">or continue with</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex space-x-4 flex items-center justify-center">
          <button
            onClick={handleGoogleSignup}
            type="button"
            className="flex items-center justify-center w-full  border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <FcGoogle className="mr-2 text-lg" /> Google
          </button>
          {/* <button */}
          {/*   type="button" */}
          {/*   className="flex items-center justify-center w-1/2 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition" */}
          {/* > */}
          {/*   <FaGithub className="mr-2 text-lg" /> GitHub */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}
