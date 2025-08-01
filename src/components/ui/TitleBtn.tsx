import React from 'react'

type Props = {
    label: string
}

const TitleBtn = ({ label }: Props) => {
    return (
        <button className='lg-custom:w-[170px] 2xl:w-[215px] lg-custom:h-[49px] 2xl:h-[63px] bg-gray10 border border-gray15 lg-custom:rounded-lg 2xl:rounded-[10px] text-white lg-custom:text-sm 2xl:text-lg font-medium'>
            View All {label}
        </button>
    )
}

export default TitleBtn
