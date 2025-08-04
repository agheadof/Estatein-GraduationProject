import { EmailIcon, LocationIcon, PhoneIcon } from "../icons/FormIcons";
import LocationInfoBox from "../ui/LocationInfoBox";
import MainButton from "../ui/MainButton";

type OfficeLocationCardProps = {
  branch: string;
  address: string;
  details: string;
  email: string;
  phone: string;
  city: string;
  category: string;
};

function OfficeLocationCard({
  branch,
  address,
  details,
  email,
  phone,
  city,
}: OfficeLocationCardProps) {
  return (
    <div className="flex flex-col border border-white90 dark:border-gray15 rounded-lg 2xl:rounded-xl p-6 lg-custom:p-10 2xl:p-[50px] gap-6 lg-custom:gap-[30px] 2xl:gap-10 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(133,91,255,0.6)] hover:border-purple60/50">
      <p className="text-sm/[1.5] 2xl:text-lg font-medium text-black dark:text-white">
        {branch}
      </p>
      <h3 className="text-xl/[1.5] lg-custom:text-2xl 2xl:text-3xl font-semibold text-black dark:text-white ">
        {address}
      </h3>
      <p className="text-sm/[1.5] lg-custom:text-base 2xl:text-lg font-medium line-clamp-3 text-gray40 dark:text-gray60">
        {details}
      </p>
      <div className="flex flex-wrap space-x-2.5 space-y-2">
        <LocationInfoBox
          icon={<EmailIcon className="text-black dark:text-white group-hover:text-purple60" />}
          text={email}
          className="group"
        />
        <LocationInfoBox
          icon={<PhoneIcon className="text-black dark:text-white group-hover:text-purple60" />}
          text={phone}
          className="group"
        />
        <LocationInfoBox
          icon={
            <LocationIcon className="text-black dark:text-white group-hover:text-purple60" />
          }
          text={city}
          className="group"
        />
      </div>
      <MainButton variant="normalPurple">Get Direction</MainButton>
    </div>
  );
}

export default OfficeLocationCard;
