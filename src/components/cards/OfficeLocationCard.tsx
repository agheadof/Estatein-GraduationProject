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
  mapLink: string;
};

function OfficeLocationCard({
  branch,
  address,
  details,
  email,
  phone,
  city,
  mapLink,
}: OfficeLocationCardProps) {
  return (
    <div className="flex flex-col min-h-[409px] lg-custom:min-w-[372px] 2xl:min-w-[472px] border border-white90 dark:border-gray15 rounded-lg 2xl:rounded-xl p-6 lg-custom:p-10 2xl:p-[50px] gap-6 lg-custom:gap-[30px] 2xl:gap-10 transition-all duration-300 transform hover:scale-[1.01]  hover:shadow-[0px_10px_20px_rgba(112,59,247,0.3)] dark:hover:shadow-[0px_10px_20px_rgba(148,108,249,0.2)] hover:border-purple60/50">
      <div>
        <p className="text-sm/[1.5] 2xl:text-lg font-medium text-black dark:text-white mb-1 lg-custom:mb-1.5 2xl:mb-2.5">
          {branch}
        </p>
        <h3 className="text-xl/[1.5] lg-custom:text-2xl 2xl:text-3xl font-semibold text-black dark:text-white mb-2 lg-custom:mb-2.5 2xl:mb-3.5 ">
          {address}
        </h3>
        <p className="text-sm/[1.5] lg-custom:text-base 2xl:text-lg font-medium line-clamp-3 text-gray40 dark:text-gray60">
          {details}
        </p>
      </div>
      <div className="flex items-center flex-wrap lg-custom:gap-2.5 gap-2">
        <LocationInfoBox
          icon={
            <EmailIcon className="text-black dark:text-white group-hover:text-purple60" />
          }
          text={email}
          className="group"
        />
        <LocationInfoBox
          icon={
            <PhoneIcon className="text-black dark:text-white group-hover:text-purple60" />
          }
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
      <MainButton
        variant="normalPurple"
        className="2xl:text-lg"
        onClick={() => window.open(mapLink, "_blank")}
      >
        Get Direction
      </MainButton>
    </div>
  );
}

export default OfficeLocationCard;
