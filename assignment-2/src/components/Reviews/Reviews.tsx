import React from "react"
import man from '../../assets/rev/man.png'
import starq from '../../assets/rev/starq.png'
import star from '../../assets/rev/star.png'
import wvet from '../../assets/rev/wvet.png'

const Reviews = () => {
    return (
        <div className="flex justify-between py-28 px-28 relative">
            <div className="w-full relative flex justify-center items-center gap-10">
                <div className="relative flex justify-center items-center">

                    <img src={man} className="border-0 w-6/7 border-black rounded-md" />

                    <img src={starq} className="absolute -top-14 -right-12" />

                    <div className="absolute -bottom-8 py-6 px-5 w-1/2 bg-no-repeat " style={{ backgroundImage: `url(${wvet})` }}>
                        <div className="flex flex-row justify-center gap-5">
                            {Array(5).fill(1).map((item, i) => {
                                return <div key={i} className={`${i == 0 ? 'bg-white' : ''} w-3 h-3 border-2 rounded-full`}></div>
                            })}
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-full flex flex-col items-start justify-center relative">
                <h2 className="text-dark-blue text-5xl mb-4">Customer Reviews</h2>

                <div className="bg-[#FBF2DA] rounded-3xl my-7 px-9 py-7 w-2/3">
                    <p className="text-dark-blue text-2xl">
                        As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.
                    </p>
                </div>

                <div className="relative mt-8">
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl ">
                        <div className="flex justify-center items-center">&#8592;</div>
                    </button>
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl absolute border-2 -right-24">
                        <div className="flex justify-center items-center" >&#8594;</div>
                    </button>
                </div>
            </div>
            <img src={star} className="absolute right-0 top-0" />
        </div>
    )
}

export default Reviews