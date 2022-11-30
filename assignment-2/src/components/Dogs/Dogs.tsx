import React from "react"
import neckless from '../../assets/dogs/neckless.png'
import diffrentCategory from '../../assets/dogs/diffrent-category.png'
import animal1 from '../../assets/dogs/animal-1.png'
import animal2 from '../../assets/dogs/animal-2.png'
import animal3 from '../../assets/dogs/animal-3.png'
import DogItem from "./DogItem"


const Dogs = () => {
    return (
        <div className="bg-orange h-80 flex flex-row justify-between" >
            <img src={neckless} className="absolute mt-2 left-0" />
            <div className=" w-2/4 flex items-center justify-center">
                <img src={diffrentCategory} className="items-center" />

            </div>

            <div className="flex flex-row gap-8 overflow-hidden ml-20">

                <DogItem />

                <div className="flex flex-col justify-center items-center gap-4">
                    <div>
                        <span className="text-4xl text-white">Dog</span> <span className="text-lg text-white">(JASPER)</span>
                    </div>
                    <img src={animal3} className="w-44 border-4 rounded-full border-white max-w-none" alt="" />
                </div>

                {Array(5).fill(1).map(item =>
                    <DogItem />
                )}

            </div>
        </div>
    )
}

export default Dogs