import { useEffect } from "react";

type FormAlertProps = {
  message: string;
  onClose: () => void;
};

function AlertMessage({ message, onClose }: FormAlertProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="w-full bg-green-50 text-purple60 dark:bg-purple95 dark:text-green-100 border border-green-300 dark:border-purple60 shadow-sm rounded-md px-5 py-3 flex items-center gap-3 transition-opacity duration-300 animate-fadeIn">
      <svg
        className="w-5 h-5 text-purple60 dark:text-purple95 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}

export default AlertMessage;
