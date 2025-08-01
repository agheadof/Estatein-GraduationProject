import { MessageIcon, SendIcon } from "../../icons/FooterIcons";

export function FooterNewsletter() {
  return (
    <form className="space-y-2 w-full lg-custom:w-[305px] 2xl:w-[423px] border border-gray15 rounded-xl">
      <div className="relative">
        <MessageIcon
          className="absolute left-5 top-1/2 size-4 -translate-y-1/2 stroke-gray-light"
        />
        <input
          placeholder="Enter Your Email"
          autoComplete="email"
          className="w-full px-12 py-3.5 rounded-xl"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
}
