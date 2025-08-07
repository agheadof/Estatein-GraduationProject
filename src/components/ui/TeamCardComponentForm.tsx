import { useRef, useState } from "react";
import AlertMessage from "../ui/AlertMessage";

function TeamCardComponentForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [massage, setMassage] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!massage.trim()) {
      setError("Please enter your massage.");
      return;
    }

    setShowAlert(true);
    setError("");
    formRef.current?.reset();
    setMassage("");
  };
  return (
    <>
      {showAlert && (
        <AlertMessage
          message="Your message has been sent successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <form ref={formRef} onSubmit={onSubmit} className="">
        <input
          type="text"
          placeholder="Say Hello 👋"
          onChange={(e) => setMassage(e.target.value)}
          className="text-black dark:text-white bg-white97 dark:bg-gray10 border border-white90 dark:border-gray15 py-2 pr-2 pl-6 lg-custom:py-2.5 lg-custom:pr-2.5 lg-custom:pl-5 2xl:py-3.5 2xl:pr-3.5 2xl:pl-6
                        rounded-[100px] w-full h-[64px]"
        />
        {error && (
          <span className="absolute -bottom-5 left-2 text-xs text-red-500">
            {error}
          </span>
        )}
        <button
          type="submit"
          className="bg-purple70 dark:bg-purple60  absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-3.5 lg-custom:p-2 2xl:p-2.5 rounded-full cursor-pointer"
        >
          <img
            src="/assets/icons/Team/send.svg"
            alt="icon"
            className="w-5 h-5 2xl:w-6 2xl:h-6 "
          />
        </button>
      </form>
    </>
  );
}

export default TeamCardComponentForm;
