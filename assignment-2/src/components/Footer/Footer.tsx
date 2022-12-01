import sparkYellow from '../../assets/spark-yellow.png'
import fb from '../../assets/footer/fb.png'
import ig from '../../assets/footer/ig.png'
import tw from '../../assets/footer/tw.png'

const Footer = () => {
    return (
        <div className="bg-dark-blue flex flex-row justify-around items-center py-10 px-10">
            <div>

                <h1 className="text-6xl text-orange">Pet-First</h1>

            </div>
            <img src={sparkYellow} className="" />
            <div>
                <nav className="flex flex-row justify-between space-x-10   ">
                    <a href="#!" className="text-base text-white">About</a>
                    <a href="#!" className="text-base text-white">Project</a>
                    <a href="#!" className="text-base text-white">Service</a>
                    <a href="#!" className="text-base text-white">Client</a>
                    <a href="#!" className="text-base text-white">Team</a>
                    <a href="#!" className="text-base text-white">Contact</a>
                    <a href="#!" className="text-base text-white">Blog</a>
                </nav>
                <div className="flex items-center justify-start gap-11 mt-10">
                    <a href="#!" className="text-xl text-white">Flow</a>
                    <div className="flex justify-between gap-8">
                        <a href="#!"><img src={fb} alt="" /></a>
                        <a href="#!"><img src={ig} alt="" /></a>
                        <a href="#!"><img src={tw} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer