
import Dogs from './components/Dogs/Dogs'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Parenting from './components/Parenting/Parenting'
import Reviews from './components/Reviews/Reviews'
import Service from './components/Service/Service'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  return (
    <div className="App">
      <Hero />
      <Dogs />
      <Service />
      <Parenting />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
