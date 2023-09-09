import Form from "./components/Form/Form.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return(
      <main className='min-h-screen w-full flex flex-col justify-center items-center relative px-3'>
          <div className='fixed inset-0 z-[-5]'>
              <div className="w-full h-[65%] bg-[#F9DBC4]"></div>
              <div className="w-full h-[35%] bg-gray-200"></div>
          </div>
          <Navbar/>
          <div className='text-4xl text-center font-extrabold mb-11 pt-[85px] md:pt-0'>
              Trusted Myanmar Currency Converter
          </div>
          <Form/>
      </main>
  )
}
export default App