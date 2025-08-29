"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Dialog({
  open,
  onClose,
  children,
  title,
  className,
}: DialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setMounted(true);
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setMounted(false), 300);
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${
        open ? "bg-black/50" : "bg-transparent"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-2xl p-6 transform transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Content */}
        <div className="text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}
