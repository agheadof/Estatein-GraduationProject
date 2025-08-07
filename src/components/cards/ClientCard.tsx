import MainButton from "../ui/MainButton"

import icon1 from "/assets/icons/ValuedClients/domain.svg"
import icon2 from "/assets/icons/ValuedClients/category.svg"

interface Client {
  id: string
  category: string
  domain: string
  name: string
  review: string
  since: string
}

function ClientCard({ since, name, domain, category, review }: Client) {
  return (
    <div
      className="Client_card_about_last 
        bg-white99 dark:bg-gray08 
        border border-gray15 
        dark:border-gray15 
        rounded-xl p-6 lg-custom:p-[40px] 2xl:p-[50px] 
        shadow-[0px_0px_0px_6px_#f1f1f3] dark:shadow-[0px_0px_0px_6px_#191919] 
        lg-custom:shadow-[0px_0px_0px_8px_#f1f1f3] dark:lg-custom:shadow-[0px_0px_0px_8px_#191919] 
        flex flex-col gap-[30px] 2xl:gap-[40px] 
        duration-300 hover:shadow-[0px_10px_20px_rgba(112,59,247,0.1)] 
        dark:hover:shadow-[0px_10px_20px_rgba(148,108,249,0.2)]"
    >
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-max">
          <p className="text-sm lg-custom:text-base 2xl:text-lg font-medium leading-[150%] text-gray60 dark:text-gray60">
            Since {since}
          </p>
          <h4 className="font-semibold text-xl lg-custom:text-2xl 2xl:text-[30px] text-gray08 dark:text-white leading-[150%]">
            {name}
          </h4>
        </div>
        <MainButton
          variant="darkBg"
          className="w-full sm:w-max py-[14px] px-5 2xl:px-6"
        >
          Visit Website
        </MainButton>
      </div>

      <div className="flex items-center justify-between">
        <div className="icon_and_text flex flex-col gap-1 lg-custom:gap-[6px] 2xl:gap-2">
          <div className="flex items-center gap-0.5 lg-custom:gap-1 2xl:gap-[6px]">
            <img src={icon1} alt="icon" />
            <p className="text-xs lg-custom:text-sm 2xl:text-lg text-gray60 dark:text-gray60 font-medium leading-[150%]">
              Domain
            </p>
          </div>
          <p className="text-sm lg-custom:text-base 2xl:text-xl text-gray08 dark:text-white font-medium leading-[150%]">
            {domain}
          </p>
        </div>
        <div className="grey_line w-px bg-gray15 dark:bg-[#262626] self-stretch"></div>
        <div className="icon_and_text_two flex flex-col gap-1 lg-custom:gap-[6px] 2xl:gap-2 pl-4 sm:pl-0">
          <div className="flex items-center gap-0.5 lg-custom:gap-1 2xl:gap-[6px]">
            <img src={icon2} alt="icon" />
            <p className="text-xs lg-custom:text-sm 2xl:text-lg text-gray60 dark:text-gray60 font-medium leading-[150%]">
              Category
            </p>
          </div>
          <p className="text-sm lg-custom:text-base 2xl:text-xl text-gray08 dark:text-white font-medium leading-[150%]">
            {category}
          </p>
        </div>
      </div>

      <div
        className="the_say_box 
          p-5 lg-custom:p-6 2xl-[30px] 
          rounded-xl 
          border border-gray15 dark:border-gray15 
          shadow-[0px_0px_0px_6px_#f1f1f3] dark:shadow-[0px_0px_0px_6px_#191919] 
          lg-custom:shadow-[0px_0px_0px_8px_#f1f1f3] dark:lg-custom:shadow-[0px_0px_0px_8px_#191919] 
          flex flex-col gap-2 lg-custom:gap-[10px] 2xl:gap-[14px]"
      >
        <p className="text-sm lg-custom:text-base 2xl:text-lg text-gray60 dark:text-gray60 leading-[150%] font-medium">
          What They Said 🤗
        </p>
        <p className="text-sm lg-custom:text-base 2xl:text-lg text-gray08 dark:text-white font-medium leading-[150%]">
          {review}
        </p>
      </div>
    </div>
  )
}

export default ClientCard
