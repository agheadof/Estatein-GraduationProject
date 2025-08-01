import React from 'react'
import TitleBtn from '../../ui/TitleBtn'

type Props = {
    heading: string;
    paragraph: string;
    buttonLabel: string;
    classEdit?: boolean;
}

const Title = ({ heading, paragraph, buttonLabel,classEdit }: Props) => {
    return (
        <div className=' mb-[40px] lg-custom:mb-[60px] 2xl:mb-[80px] mt-[61px] lg-custom:mt-[90px] 2xl:mt-[110px] w-full'>
            <div className=' lg-custom:mb-1.5 2xl:mb-2.5'>
                <img
                    src="/assets/icons/MainTitle/shape.svg"
                    alt="icon"
                    className='w-[68px] h-[30px]'
                />
            </div>
            <div className='flex justify-between items-center 2xl:items-end'>
                <div>
                    <h2 className='text-white font-semibold text-[28px] lg-custom:text-[38px] 2xl:text-5xl mb-1.5 lg-custom:mb-2.5 2xl:mb-3.5'>
                        {heading}
                    </h2>
                    <p className='text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium'>
                        {paragraph}
                    </p>
                </div>
                <div className='hidden lg-custom:block'>
                    <TitleBtn label={buttonLabel} />
                </div>
            </div>
        </div>
    )
}

export default Title
