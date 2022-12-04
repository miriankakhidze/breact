import bgL from '../../assets/serv/bg-l.svg'
import bgR from '../../assets/serv/bg-r.svg'
import bgYell from '../../assets/serv/bg-yell.svg'
import clo from '../../assets/serv/clo.png'
import klan from '../../assets/serv/klan.png'
import kole from '../../assets/serv/kole.png'
import sci from '../../assets/serv/sci.png'
import spring from '../../assets/serv/spring.png'

const Service = () => {
    return (
        <div className="py-16 pl-28 relative">
            <div className="ml-32">
                <h1 className="text-dark-blue text-4xl my-8 font-bold">Our Service</h1>

                <div className="grid grid-flow-col gap-8 overflow-x-hidden">

                    <div className="w-[520px] h-[565px] py-16 px-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgYell})` }}>
                        <div className="">
                            <img src={kole} className="top-0 left-0 " />
                            <h3 className="text-dark-blue text-2xl my-5">Pharmacy</h3>
                            <p className="text-dark-blue text-xl">Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation</p>
                            <a href="#!" className="bg-dark-blue mt-8 inline-flex items-center justify-center rounded-full border-0 px-8 py-4 text-base font-medium text-light-yellow">Explore</a>

                        </div>
                    </div>

                    <div className="w-[520px] h-[494px] py-16 px-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgR})` }}>
                        <div className="">
                            <img src={sci} className="top-0 left-0" />
                            <div>
                                <h3 className="text-dark-blue text-2xl my-5">Breed-specific Haircuts</h3>
                                <p className="text-dark-blue text-xl">Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.</p>
                            </div>
                            <a href="#!" className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-dark-blue px-8 py-4 text-base font-medium text-dark-blue">Explore</a>
                        </div>
                    </div>

                    <div className="w-[520px] h-[550px] mt-14 py-16 px-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgL})` }}>
                        <div className="">
                            <img src={clo} className="top-0 left-0" />
                            <div>
                                <h3 className="text-dark-blue text-2xl my-5">Cloths</h3>
                                <p className="text-dark-blue text-xl">Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready</p>
                            </div>
                            <a href="#!" className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-dark-blue px-8 py-4 text-base font-medium text-dark-blue">Explore</a>
                        </div>
                    </div>

                </div>
            </div>


            <img src={spring} className="absolute top-20 left-0" />
            <img src={klan} className="absolute right-0 top-0" />
        </div>
    )
}

export default Service