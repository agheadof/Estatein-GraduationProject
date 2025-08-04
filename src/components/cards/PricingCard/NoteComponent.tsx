const NoteComponent = () => {
  return (
    <div className="flex items-center max-md:items-start max-md:flex-col py-6 px-5 md:py-6 md:px-10 2xl:py-[30px] 2xl:px-[50px] mb-[30px] md:mb-10 2xl:mb-[50px] rounded-lg md:rounded-xl border border-gray15 bg-gray10">
      <span className="md:pr-4 2xl:pr-5 text-lg md:text-xl 2xl:text-2xl font-semibold leading-[150%] text-white min-md:border-r border-gray15 max-md:pb-2.5">
        Note
      </span>
      <p className="text-sm md:text-lg font-medium leading-[150%] text-gray60 md:pl-4 2xl:pl-5 max-md:border-t border-gray15 max-md:pt-2.5">
        The figures provided above are estimates and may vary depending on the
        property, location, and individual circumstances.
      </p>
    </div>
  );
};

export default NoteComponent;
