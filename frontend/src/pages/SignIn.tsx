import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const userData = { email, password };
  
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const result = await response.json();
        const token = result.access_token;
  
        if (token) {
          localStorage.setItem("token", token); // Save the token to localStorage
          console.log("Token stored:", token);
          navigate("/bookmarks");
          alert("Sign-in successful! Welcome!");
        } else {
          alert("Sign-in failed: No token received.");
          console.error("No token received in the response.");
        }
      } else {
        const errorMessage = await response.text();
        alert(`Sign-in failed: ${errorMessage}`);
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("An error occurred while signing in. Please try again.");
    }
  };
  console.log(localStorage.getItem("token"));

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
            Email:
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password:
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>

        {/* Navigation Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account yet? 
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">Sign Up</Link>
        </p>
      </form>
    </div>
  </div>
  );
};

export default SignIn;
