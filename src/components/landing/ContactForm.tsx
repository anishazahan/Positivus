"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import ContactDecorativeSection from "./ContactDecorativeSection";

type FormData = {
  type: "sayHi" | "getQuote";
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    type: "sayHi",
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};
    if (!formData?.email?.trim()) newErrors.email = "Email is required";
    if (!formData?.message?.trim()) newErrors.message = "Message is required";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="container">
      <div className="mb-10">
        <SectionHeading
          title={"Contact Us"}
          description1={"Connect with Us: Let's Discuss Your"}
          description2={"Digital Marketing Needs"}
        />
      </div>
      <div className="container mx-auto pl-4 py-8 lg:py-14 bg-light dark:bg-gray-950 transition-colors duration-300 rounded-[45px] my-10 lg:my-16 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between gap-8 items-center">
            {/* Form Section */}
            <div className="w-full lg:w-[50%] order-2 lg:order-1">
              <div className="p-8 transition-colors duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Radio Options */}
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="type"
                          value="sayHi"
                          checked={formData.type === "sayHi"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                            formData.type === "sayHi"
                              ? "border-lime-500 bg-lime-500"
                              : "border-gray-300 dark:border-gray-600 bg-transparent"
                          } group-hover:border-primary`}
                        >
                          {formData.type === "sayHi" && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </div>
                      </div>
                      <span className="text-dark dark:text-light font-medium">
                        Say Hi
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="type"
                          value="getQuote"
                          checked={formData.type === "getQuote"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                            formData.type === "getQuote"
                              ? "border-lime-500 bg-lime-500"
                              : "border-gray-300 dark:border-gray-600 bg-transparent"
                          } group-hover:border-primary`}
                        >
                          {formData.type === "getQuote" && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </div>
                      </div>
                      <span className="text-dark dark:text-light font-medium">
                        Get a Quote
                      </span>
                    </label>
                  </div>

                  {/* Name Field */}
                  <div className="space-y-2 pt-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark dark:text-light"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-light focus:ring-[1px] focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark dark:text-light"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                      } bg-white dark:bg-transparent text-dark dark:text-gray-100 placeholder-gray-400 dark:placeholder-light focus:ring-[1px] focus:border-transparent outline-none transition-all duration-200`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark dark:text-light"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                      } bg-white dark:bg-transparent text-dark dark:text-gray-100 placeholder-gray-400 dark:placeholder-light focus:ring-[1px] focus:border-transparent outline-none transition-all duration-200`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-dark py-3 dark:bg-light text-white dark:text-dark px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Decorative Section */}
            <ContactDecorativeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
