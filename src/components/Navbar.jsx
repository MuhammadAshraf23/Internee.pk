import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const border={
    borderRadius:"40px"
  }



  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 ">
                   Home
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'}className="-m-2 block p-2 font-medium text-gray-900">
                      About
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      Contact
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      Internships
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      CMS
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      Job Portals
                    </Link>
                  </div>

                  <div className="flow-root">
                  <Button variant="contained" color="success" >Internee Portals</Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root> */}

      {/* desktop  */}
      <header className="relative bg-white">
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 py-5 lg:px-20 shadow-xl">
          <div className="">
            <div className="flex h-16 items-center justify-between">
              {/* <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button> */}

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <img src="https://internee.pk/1st-logo.jpg" alt="logo" style={{width:"18%"}}/>
                    <div>
                    <h1 className='text-3xl font-bold text-black px-2 py-1 rounded'><b style={{color:"green"}}>Internee</b>.pk</h1>
                    <p className='text-xs text-indigo-700 font-bold'>VIRTUAL INTERNSHIP PLATFORM</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-lg text-gray-700 text-indigo-500 ">
                    Home
                  </Link>
                  <Link to={'/order'} className="text-lg text-gray-700 hover:text-indigo-500">
                    About
                  </Link>
                  <Link to={'/dashboard'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Contact
                  </Link>
                   <Link to={'/dashboard'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Internships
                  </Link>
                  <Link to={'/dashboard'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    CMS
                  </Link>
                  <Link to={'/dashboard'} className="text-lg text-gray-700 hover:text-indigo-500 " >
                    Job Portals
                  </Link>
                </div>
                           
              </div>
              <div className='ml-10'>
                  <button className="py-3 px-5 text-white rounded-full bg-indigo-500" >Internee Portals</button>
                </div> 
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}