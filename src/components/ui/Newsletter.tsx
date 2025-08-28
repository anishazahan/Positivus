"use client";

import { useState } from "react";
import { Mail, Heart, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-[634px]">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full md:w-[285px] outline-none px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-white  focus:border-primary"
              : "bg-white border-gray-300 text-dark  focus:border-primary"
          }`}
        />
        <button
          type="submit"
          className="w-full md:w-auto sm:inline-block outline-none bg-gradient-to-r from-lime-500 to-primary text-dark font-medium  py-3 px-4 rounded-lg hover:bg-lime-800  focus:outline-none transition-all"
        >
          Subscribe To News
        </button>
      </div>
    </form>
  );
};

export default NewsletterSection;
