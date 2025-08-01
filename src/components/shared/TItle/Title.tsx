import React from 'react'

function Title() {
    return (
        <>
        <div className=' bg-[var(--color-grey08)] min-[992px]:mb-1.5 2xl:mb-2.5 mt-[61px] min-[992px]:mt-[90px] 2xl:mt-[110px] px-4 min-[992px]:px-[80px] 2xl:px-[162px] w-full '>
            <div>
                <img src="/assets/icons/MainTitle/shape.svg" alt="icon" className=' w-[68px] h-[30px]' />
            </div>
            <div className=' flex justify-between items-end '>
                <div>
                    <h2 className=' text-white font-semibold text-[28px] min-[992px]:text-[38px] 2xl:text-5xl mb-1.5 min-[992px]:mb-2.5 2xl:mb-3.5 '>What Our Clients Say</h2>
                    <p className=' text-[var(--color-grey60)] text-sm min-[992px]:text-base 2xl:text-lg font-medium'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>
                <button className=' hidden min-[992px]:block min-[992px]:w-[170px] 2xl:w-[215px] min-[992px]:h-[49px] 2xl:h-[63px] bg-[var(--color-grey10)] border border-[var(--color-grey15)] min-[992px]:rounded-lg 2xl:rounded-[10px] text-white min-[992px]:text-sm 2xl:text-lg font-medium   '>View All Testimonials</button>
            </div>
        </div>
        </>
    )
}

export default Title