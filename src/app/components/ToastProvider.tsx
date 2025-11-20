"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Info, AlertCircle, X } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: number;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextType {
  showToast: (type: ToastType, title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (type: ToastType, title: string, message?: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message }]);

    // 5 saniye sonra otomatik kaldır
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle size={24} />;
      case "error":
        return <XCircle size={24} />;
      case "warning":
        return <AlertCircle size={24} />;
      case "info":
        return <Info size={24} />;
    }
  };

  const getColors = (type: ToastType) => {
    switch (type) {
      case "success":
        return "from-green-600 to-emerald-600 border-green-500";
      case "error":
        return "from-red-600 to-rose-600 border-red-500";
      case "warning":
        return "from-yellow-600 to-orange-600 border-yellow-500";
      case "info":
        return "from-blue-600 to-cyan-600 border-blue-500";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* TOAST CONTAINER */}
      <div className="fixed top-4 right-4 z-[9999] space-y-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              className="pointer-events-auto"
            >
              <div
                className={`glass-panel p-4 rounded-xl border-l-4 ${getColors(
                  toast.type
                )} min-w-[300px] max-w-[400px] shadow-2xl backdrop-blur-xl`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-white">{getIcon(toast.type)}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{toast.title}</h4>
                    {toast.message && (
                      <p className="text-sm text-gray-300">{toast.message}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
