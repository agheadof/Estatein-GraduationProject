type CardProps = {
    title: string;
    description: string;
}

function AchievementsCard({ title, description }: CardProps) {
    return (
        <div className='p-[30px] md:p-10 2xl:p-[50px] border-gray15 border shadow-[0px_0px_0px_10px_#191919] rounded-xl '>
            <h2 className="text-white font-semibold text-[20px] lg-custom:text-2xl mb-4 2xl:text-[30px] md:mb-6 2xl:mb-[30px] ">
                {title}
            </h2>
            <p className={`text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium`}>
                {description}
            </p>
        </div>
    )
}

export default AchievementsCard
