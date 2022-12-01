import React from "react"
import koke from '../../assets/sub/koke.png'
import must from '../../assets/sub/must.png'
import ota from '../../assets/sub/ota.png'

const Subscribe = () => {
    return (
        <div className="flex justify-between w-full relative">
            <div className="bg-yellow w-full px-14 py-20 relative flex items-center justify-center ">
                <img src={koke} className="absolute bottom-0 " />
                <div>
                    <img src={must} className="" />
                </div>
            </div>
            <div className="bg-orange w-full px-14 py-20 ">
                <h1 className="text-dark-blue text-5xl max-w-lg font-bold">Subscribe & Get Pet Updatenews</h1>
                <img src={ota} className="absolute right-0 top-10 " />
            </div>
        </div>
    )
}
export default Subscribe