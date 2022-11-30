import React from "react"
import Navbar from "../Navbar/Navbar"
import dogBack from '../../assets/hero/dog-back.png'
import dog from '../../assets/hero/dog.png'
import arrow from '../../assets/hero/arrow.png'
import spark from '../../assets/hero/spark.png'

const Hero = () => {
    return (
        <div className="text-left mx-auto max-w-7xl px-4 sm:px-6 mb-64  ">
            <img src={dogBack} className="absolute top-0 right-0 z-0" />
            <Navbar />
            <div>
                <img src={arrow} className="" />
                <h3 className="text-blue text-xl before:bg-[url('../../assets/hero/arrow.png')]">Available in select states</h3>
            </div>
            <h1 className="uppercase text-dark-blue text-8xl">a pet-first</h1>
            <h2 className="uppercase text-orange text-8xl">approeach to</h2>
            <h2 className="uppercase text-dark-blue text-8xl">wellness</h2>

            <img src={spark} className="absolute z-0" />


            <img src={dog} className="absolute top-14 right-28 z-0" />

            <div className="flex flex-row justify-around items-center absolute bottom-16 right-[115px] w-[430px] bg-blue h-14 rounded-full">
                <div className="">
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl ">
                        <div className="flex justify-center items-center -rotate-90">&#8599;</div>
                    </button>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    {Array(5).fill(1).map((item, i) => {
                        return <div className={`${i == 0 ? 'bg-white' : ''} w-3 h-3 border-2 rounded-full`}></div>
                    })}
                </div>
                <div className="">
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl ">
                        <div className="flex justify-center items-center rotate-90" >&#8599;</div>
                    </button>
                </div>
            </div>


            <a href="#" className="bg-orange mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-400  px-8 py-4 text-base font-medium text-white">Learn More</a>

        </div>
    )
}

export default Hero