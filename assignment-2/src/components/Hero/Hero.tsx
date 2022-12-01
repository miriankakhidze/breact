import dogBack from '../../assets/hero/dog-back.png'
import dog from '../../assets/hero/dog.png'
import Navbar from "../Navbar/Navbar"

const Hero = () => {
    return (
        <div className="text-left mx-auto px-4 sm:px-6 mb-[8.7rem] relative">
            <img src={dogBack} className="absolute top-0 right-0 z-0" />
            <Navbar />
            <div className="mx-auto max-w-7xl mt-32">
                <div>
                    <h3 className="text-blue text-xl  relative before:content-arrow before:absolute before:top:3 before:left-6 pl-24 mb-6" >Available in select states</h3>
                </div>
                <h1 className="uppercase text-dark-blue text-8xl font-bold">a pet-first</h1>
                <h2 className="uppercase text-orange text-8xl font-bold relative after:content-spark after:absolute after:-top-20 after:right-[27rem]" >approeach to</h2>
                <h2 className="uppercase text-dark-blue text-8xl font-bold">wellness</h2>
                <a href="#" className="bg-orange mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-400  px-8 py-4 text-xl tracking-wide font-medium text-white">Learn More</a>


            </div>

            <img src={dog} className="absolute top-14 right-28 z-0" />

            <div className="flex flex-row justify-around items-center absolute -bottom-28 right-[115px] w-[430px] bg-blue h-14 rounded-full">
                <div>
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl ">
                        <div className="flex justify-center items-center -rotate-90">&#8599;</div>
                    </button>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    {Array(5).fill(1).map((item, i) => {
                        return <div key={i} className={`${i == 0 ? 'bg-white' : ''} w-3 h-3 border-2 rounded-full`}></div>
                    })}
                </div>
                <div>
                    <button className="bg-dark-blue rounded-[100%] px-10 text-4xl ">
                        <div className="flex justify-center items-center rotate-90" >&#8599;</div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero