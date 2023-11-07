import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 py-5 lg:px-32 shadow-xl">
          <div className="">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex">
                    <img src="https://internee.pk/1st-logo.jpg" alt="logo" style={{ width: "18%" }} />
                    <div>
                      <h1 className='text-3xl font-bold text-black px-2 py-1 rounded'><b style={{ color: "green" }}>Internee</b>.pk</h1>
                      <p className='text-indigo-700 font-bold' style={{ fontSize: '0.6rem' }}>VIRTUAL INTERNSHIP PLATFORM</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/'} className="text-lg text-gray-700 text-indigo-500 ">
                    Home
                  </Link>
                  <Link to={'/about'} className="text-lg text-gray-700 hover:text-indigo-500">
                    About
                  </Link>
                  <Link to={'/internships'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Internships
                  </Link>
                  <Link to={'/contact'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Contact
                  </Link>
                  <Link to={'/cms'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    CMS
                  </Link>
                  <Link to={'/jobportal'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Job Portals
                  </Link>
                </div>
              </div>
              <div className="flex h-16 items-center justify-between lg:hidden">
                <AiOutlineMenu />
              </div>
              <div className='ml-10 hidden lg:block'>
                <button className="py-3 px-5 text-white rounded-full bg-indigo-500">Internee Portals</button>
              </div>
            </div>
           </div>
        </nav>
      </header>
    </div>
  )
}