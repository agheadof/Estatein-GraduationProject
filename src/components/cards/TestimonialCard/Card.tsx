import StarRating from "./StarRating";

type Props = {
  client: {
    name: string;
    subject: string;
    review: string;
    clientImage: string;
    location: string;
    show?: boolean;
    rate?: number;
  };
};

const Card = ({ client }: Props) => {
  const cardContainerClass =
    "p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl dark:bg-gray08 bg-white99 border dark:border-gray15 border-white90";
  const clientNameClass =
    "dark:text-white text-black font-medium text-lg lg-custom:text-xl 2xl:text-xl whitespace-nowrap";
  const clientLocationClass =
    "text-gray40 dark:text-gray60 font-medium text-sm lg-custom:text-base 2xl:text-lg";
  const subjectClass =
    "dark:text-white text-black whitespace-nowrap font-semibold lg-custom:text-xl 2xl:text-2xl mb-2.5";
  const reviewClass =
    "line-clamp-2 dark:text-white text-black font-medium lg-custom:text-base 2xl:text-lg";

  return (
    <div className={cardContainerClass}>
      {/* Star Rating */}
      {client.rate && <StarRating rate={client.rate} />}

      {/* Subject & Review */}
      <div className="mb-6 lg-custom:mb-[30px] 2xl:mb-10">
        <h3 className={subjectClass}>{client.subject}</h3>
        <p className={reviewClass}>{client.review}</p>
      </div>

      {/* Client Info */}
      <div className="flex gap-2.5 2xl:gap-3 items-center">
        <img
          src={client.clientImage}
          alt={`${client.name} image`}
          loading="lazy"
          className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full object-cover"
        />
        <div>
          <h4 className={clientNameClass}>{client.name}</h4>
          {client.location && <span className={clientLocationClass}>{client.location}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
