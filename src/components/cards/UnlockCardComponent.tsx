type unlockCardComponentProps = {
  cardStyle?: string;
  title: string;
  titleStyle: string;
  desc: string;
  descStyle: string;
  investments?: boolean;
};

const UnlockCardComponent = ({
  cardStyle,
  title,
  titleStyle,
  desc,
  descStyle,
  investments,
}: unlockCardComponentProps) => {
  return (
    <div
      className={`rounded-xl bg-gray10 border border-gray15 ${cardStyle}`}
    >
      <div className="flex justify-between items-center mb-[39px]">
        <h2 className={`text-white ${titleStyle}`}> {title} </h2>
        {!investments && (
          <button className="bg-gray08 text-lg font-medium text-white rounded-xl border border-gray15 py-[18px] px-6 ">
            Learn More
          </button>
        )}
      </div>

      <p
        className={`text-sm lg-custom:text-base 2xl:text-lg font-medium ${descStyle}`}
      >
        {desc}
      </p>

      {investments && (
        <button className="bg-gray08 text-lg font-medium text-white rounded-xl border border-gray15 py-[18px] px-6 w-full mt-[30px]">
          Learn More
        </button>
      )}
    </div>
  );
};

export default UnlockCardComponent;
