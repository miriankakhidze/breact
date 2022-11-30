import React from "react"
import wom from '../../assets/par/wom.png'
import spring from '../../assets/par/spring.png'
import klan from '../../assets/par/klan.png'

const Parenting = () => {
    return (
        <div className="bg-blue flex justify-between py-28 px-28 relative">
            <div className="w-full  flex justify-center items-center gap-10">
                <div className=" flex justify-center items-center">

                    <img src={wom} className="border-0 w-6/7 border-black rounded-md" />

                    <img src={spring} className="absolute left-0" />

                </div>

            </div>

            <div className="w-full flex flex-col items-start justify-center relative">
                <h2 className="text-light-yellow text-5xl mb-4">Making pet parenting easy for everyone</h2>

                <p className="text-light-yellow text-2xl my-6">
                    Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence
                </p>

                <ul className="mt-8 space-y-3">
                    <li className="flex items-center text-light-yellow text-base gap-3"> <div className="w-4 h-4 border-2 border-dark-blue rounded-full"></div> Adoption</li>
                    <li className="flex items-center text-light-yellow text-base gap-3"> <div className="w-4 h-4 border-2 border-dark-blue rounded-full"></div> Frozen Raw</li>
                    <li className="flex items-center text-light-yellow text-base gap-3"> <div className="w-4 h-4 border-2 border-dark-blue rounded-full"></div> Next Day Delivery</li>
                </ul >
                <a href="#" className="bg-dark-blue mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-400  px-8 py-4 text-base font-medium text-light-yellow">Explore</a>


            </div>
            <img src={klan} className="absolute right-0 bottom-0" />
        </div>
    )
}

export default Parenting