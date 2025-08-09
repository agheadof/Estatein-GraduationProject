type Props = {
  client: {
    name: string
    subject: string
    review: string
    clientImage: string
    location: string
    show: boolean
    rate: number
  }
}

function TestimonialCard({ client }: Props) {
  return (
    <div className="p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl dark:bg-gray08 bg-white99 border dark:border-gray15 border-white90 ">
      <div className="flex gap-2 2xl:gap-2.5 mb-6 lg-custom:mb-[30px] 2xl:mb-10">
        {[...Array(client.rate)].map((_, i) => (
          <div
            key={i}
            className="flex justify-center items-center p-1.5 lg-custom:p-2 2xl:p-2.5 dark:bg-gray10 bg-white97 border dark:border-gray15 border-white90 rounded-full w-[30px] h-[30px] lg-custom:w-[38px] lg-custom:h-[36px] 2xl:w-11 2xl:h-11"
          >
            <img
              src="/assets/icons/clients/star.svg"
              alt="star"
              className="w-full"
            />
          </div>
        ))}
      </div>

      <div className=" mb-6 lg-custom:mb-[30px] 2xl:mb-10">
        <h3 className="dark:text-white text-black whitespace-nowrap font-semibold lg-custom:text-xl 2xl:text-2xl lg-custom:mb-2.5 2xl:mb-3.5">
          {client.subject}
        </h3>
        <p className="line-clamp-2 dark:text-white text-black font-medium lg-custom:text-base 2xl:text-lg">
          {client.review}
        </p>
      </div>

      <div className="flex gap-2.5 2xl:gap-3">
        <img
          src={client.clientImage}
          alt="client image"
          className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full object-cover"
        />
        <div>
          <h4 className="dark:text-white text-black font-medium text-lg lg-custom:text-xl 2xl:text-xl whitespace-nowrap">
            {client.name}
          </h4>
          <span className="text-gray40 dark:text-gray60 font-medium text-sm lg-custom:text-base 2xl:text-lg">
            {client.location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
