import TeamCardComponentForm from "../ui/TeamCardComponentForm"

interface TeamCardProps {
  name: string
  role: string
  image: string
  twitterLink?: string
}

const TeamCardComponent = ({ name, role, image, twitterLink }: TeamCardProps) => {
  return (
    <div className="flex flex-col w-full gap-10 lg-custom:gap-[50px] p-5 lg-custom:p-6 2xl:p-[30px] border border-gray15 rounded-xl ">
      <div className="relative  ">
        <img
          src={image}
          alt={name}
          className="rounded-[10px] 2xl:rounded-xl w-full h-[268px] lg-custom:h-[220px] 2xl:h-[253px] object-top object-cover "
        />
        <div className="bg-purple70 dark:bg-purple60 absolute bottom-0 py-3.5 px-[26px] rounded-[43px] transform translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 cursor-pointer">
          <img
            src="/assets/icons/Team/twitter.svg"
            alt="icon"
            className="w-5 h-5 2xl:w-6 2xl:h-6 "
          />
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg-custom:gap-5 2xl:gap-6 ">
        <div className="text-center flex flex-col gap-0.5 lg-custom:gap-1 2xl:gap-1.5 ">
          <h3 className="text-lg lg-custom:text-[20px] 2xl:text-2xl font-semibold leading-7 text-black dark:text-white">
            {name}
          </h3>
          <p className="text-sm min-[1200px]:!text-[16px] 2xl:text-lg font-medium text-gray40 dark:text-gray60 whitespace-nowrap">
            {role}
          </p>
        </div>
        <div className="relative w-full ">
          <TeamCardComponentForm />
        </div>
      </div>
    </div>
  )
}

export default TeamCardComponent
