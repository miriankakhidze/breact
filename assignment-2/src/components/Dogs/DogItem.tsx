import animal1 from '../../assets/dogs/animal-1.png'
import animal2 from '../../assets/dogs/animal-2.png'

const DogItem = () => {
    return (
        <div className="flex flex-col justify-center align-middle gap-8">
            <div
                style={{ backgroundImage: `url(${animal1})` }}
                className='w-24 h-24 backdrop-filter brightness-50 rounded-full'>
            </div>
            <div
                style={{ backgroundImage: `url(${animal2})` }}
                className='w-24 h-24 backdrop-filter brightness-50 rounded-full'>
            </div>
        </div>
    )
}

export default DogItem