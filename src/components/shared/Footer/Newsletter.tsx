import { useRef, useState } from "react";
import { MessageIcon, SendIcon } from "../../icons/FooterIcons";
import AlertMessage from "../../ui/AlertMessage";

export function FooterNewsletter() {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setShowAlert(true);
    setError("");
    formRef.current?.reset();
    setEmail("");
  };

  return (
    <>
      {showAlert && (
        <AlertMessage
          message="Your message has been sent successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="space-y-2 w-full lg-custom:w-[305px] 2xl:w-[423px] border border-gray15 rounded-xl "
      >
        <div className="relative group">
          <MessageIcon className="absolute left-5 top-1/2 size-4 -translate-y-1/2 stroke-gray-light" />
          <input
            placeholder="Enter Your Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-10 py-3.5 rounded-xl"
          />
          {error && (
            <span className="absolute -bottom-5 left-2 text-xs text-red-500">
              {error}
            </span>
          )}
          <button
            type="submit"
            className="absolute right-1 top-1/2 size-10 -translate-y-1/2 cursor-pointer"
          >
            <SendIcon className="group-focus-within:fill-purple70" />
          </button>
        </div>
      </form>
    </>
  );
}
