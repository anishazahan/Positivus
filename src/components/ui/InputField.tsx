"use client";

import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea";
  rows?: number;
  error?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  rows = 6,
  error,
}) => {
  const inputClasses = `w-full px-4 py-3 rounded-lg border ${
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 dark:border-gray-600 focus:ring-primary"
  } bg-white dark:bg-transparent text-dark dark:text-gray-100 placeholder-gray-400 dark:placeholder-light focus:ring-[1px] focus:border-transparent outline-none transition-all duration-200`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-dark dark:text-light"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default InputField;
