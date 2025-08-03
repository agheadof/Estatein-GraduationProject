type Props = {
    client: {
        name: string
        title: string
        message: string
        image: string
        location: string
    }
}

function ClientCard({ client }: Props) {
    return (
        <div className=" min-h-[305px] lg-custom:min-h-[363px] 2xl:min-h-[442px] p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl bg-gray08 border border-gray15">
            <div className="flex gap-2 2xl:gap-2.5 mb-6 lg-custom:mb-[30px] 2xl:mb-10">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex justify-center items-center p-1.5 lg-custom:p-2 2xl:p-2.5 bg-gray10 border border-gray15 rounded-full w-[30px] h-[30px] lg-custom:w-[38px] lg-custom:h-[36px] 2xl:w-11 2xl:h-11"
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
                <h3 className="text-white font-semibold lg-custom:text-xl 2xl:text-2xl lg-custom:mb-2.5 2xl:mb-3.5">
                    {client.title}
                </h3>
                <p className="text-white font-medium lg-custom:text-base 2xl:text-lg">
                    {client.message}
                </p>
            </div>

            <div className="flex gap-2.5 2xl:gap-3">
                <img
                    src={client.image}
                    alt="client image"
                    className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full object-cover"
                />
                <div>
                    <h4 className="text-white font-medium text-lg lg-custom:text-xl 2xl:text-xl">
                        {client.name}
                    </h4>
                    <span className="text-gray60 font-medium text-sm lg-custom:text-base 2xl:text-lg">
                        {client.location}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ClientCard
