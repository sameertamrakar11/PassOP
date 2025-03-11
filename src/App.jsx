import './App.css'
import Footer from './component/Footer'
import Manager from './component/Manager'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div className=' bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] min-h-[85vh]'>
    <Manager/>

    </div>
    <Footer/>
    </>
  )
}

export default App
