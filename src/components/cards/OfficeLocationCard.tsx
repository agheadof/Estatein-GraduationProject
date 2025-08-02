import { EmailIcon, LocationIcon, PhoneIcon } from "../icons/FormIcons";
import LocationInfoBox from "../ui/LocationInfoBox";
import MainButton from "../ui/MainButton";

function OfficeLocationCard() {
  return (
    <div className="flex flex-col border-1 border-gray15 rounded-lg 2xl:rounded-xl p-6 lg-custom:p-10 2xl:p-[50px] gap-6 lg-custom:gap-[30px] 2xl:gap-10">
      <p className="text-sm/[1.5] 2xl:text-lg font-medium text-white">
        Main Headquarters
      </p>
      <h3 className="text-xl/[1.5] lg-custom:text-2xl 2xl:text-3xl font-semibold text-white ">
        123 Estatein Plaza, City Center, Metropolis
      </h3>
      <p className="text-sm/[1.5] lg-custom:text-base 2xl:text-lg font-medium text-gray60">
        Estatein's presence extends to multiple regions, each with its own
        dynamic real estate landscape. Discover our regional offices, staffed by
        local experts who understand the nuances of their respective markets.
      </p>
      <div className="flex flex-wrap space-x-2.5 space-y-2">
        <LocationInfoBox
          icon={<EmailIcon className="text-white group-hover:text-purple60" />}
          text="info@restatein.com"
          className="group"
        />
        <LocationInfoBox
          icon={<PhoneIcon className="text-white group-hover:text-purple60" />}
          text="info@restatein.com"
          className="group"
        />
        <LocationInfoBox
          icon={
            <LocationIcon className="text-white group-hover:text-purple60" />
          }
          text="info@restatein.com"
          className="group"
        />
      </div>
      <MainButton variant="normalPurple">Get Direction</MainButton>
    </div>
  );
}

export default OfficeLocationCard
