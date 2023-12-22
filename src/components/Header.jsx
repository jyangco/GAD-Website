import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom' 

function Header() {
    const [ divName, setName ] = useState('-translate-y-[300px]')
    const [ ovl, setOvl ] = useState(false)

    const showSidebar = (e) =>  {
        e.preventDefault()
        setName('translate-y-0')
        setTimeout(() => {
            setOvl(true)
        }, 300)
    }
    const hideSidebar = (e) =>  {
        e.preventDefault()
        setName('-translate-y-[300px]') 
        setTimeout(() => {
            setOvl(false)
        }, 500)
    }

    return (
        <nav id="navbar" className="w-full h-24 bg-haze border-b-2 border-slate-950 fixed z-999">
            <div className="hidden mobile-lg:!block">
                <div className="flex justify-between p-2">
                    <div className='inline-flex'>
                        <img className='h-20 px-1' src={window.location.origin + '/SEI_LOGO.png'} />
                        <img className='h-20 px-1' src={window.location.origin + '/GAD-Logo_3D-nobg.png'} />
                    </div>
                    <div className="text-right text-xl pe-1" onClick={showSidebar}> MENU <i className="fas fa-bars"></i> </div>
                    <nav className={`shadow-inner bg-white sidebar z-999 top-0 left-0 border border-dark h-fit w-full fixed ${divName} transition transform ease-in-out duration-1000`}>
                        <div className="relative">
                            <div className="pb-4 px-2">
                                <ul className="list-none text-lg font-bold">
                                    <Link to={'/'} className="text-decoration-none">
                                        <li className="p-2 border-b border-white"> HOME </li>
                                    </Link>
                                    <Link to={'/IEC-Materials'} className="text-decoration-none">
                                        <li className="p-2 border-b border-white"> IEC MATERIALS </li>
                                    </Link>
                                    <Link to={'/PPAs'} className="text-decoration-none">
                                        <li className="p-2 border-b border-white"> PROGRAMS/PROJECTS/ACTIVITIES </li>
                                    </Link>
                                    <li className="px-2 py-2 pb-0"> ABOUT <i className="fas fa-caret-down"></i> </li>
                                    <Link to={'/GFPS-Committee'} className="text-decoration-none">
                                        <li className="py-1 ps-8 border-b border-white"> GFPS Committee </li>
                                    </Link>
                                    <Link to={'/About-Page'} className="text-decoration-none">
                                        <li className="py-1 ps-8"> About us </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="fixed bottom-0 h-4 bg-white w-full text-center" onClick={hideSidebar}>
                                <i className="fas fa-caret-up text-2xl -mt-5"></i>
                            </div>
                        </div>
                    </nav>
                </div>
                {ovl && <div className="overlay"/>}
            </div>
            <div className="mx-12 mobile-lg:!hidden">
                <div className='h-24 py-2 flex justify-between'>
                    <div className="w-25 flex">
                        <img className='h-full p-1' src={window.location.origin + '/SEI_LOGO.png'} />
                        <img className='h-full p-1' src={window.location.origin + '/GAD-Logo_3D-nobg.png'} />
                    </div>
                    <div className="flex text-xl py-2 font-bold">
                        <NavLink to={'/'} className='p-4 border-x-2 border-l-4 hover:bg-slate-200 hover:text-black'> 
                            {({ isActive }) => ( isActive ?
                                <span className="border-b-4 text-white">
                                    HOME
                                </span>
                                : 
                                <span> HOME </span>
                            )}
                        </NavLink>
                        <NavLink to={'/IEC-Materials'} className='p-4 border-x-2 hover:bg-slate-200 hover:text-black'>
                            {({ isActive }) => ( isActive ?
                                <span className="border-b-4 text-white">
                                    IEC MATERIALS 
                                </span>
                                : 
                                <span> IEC MATERIALS  </span>
                            )}
                        </NavLink>
                        <NavLink to={'/PPAs'} className='p-4 border-x-2 hover:bg-slate-200 hover:text-black'> 
                            {({ isActive }) => ( isActive ?
                                <span className="border-b-4 text-white">
                                    PROGRAMS/PROJECTS/ACTIVITIES
                                </span>
                                : 
                                <span> PROGRAMS/PROJECTS/ACTIVITIES </span>
                            )}
                        </NavLink>
                        <div id="tab" className='hover:cursor-pointer hover:text-black hover:bg-slate-200 relative p-4 border-x-2 border-r-4'> 
                            ABOUT
                            <i className="ms-1 fas fa-caret-down"></i>
                            <div className="tab-content absolute bg-white -end-1 top-16 w-44 z-999 border">
                                <ul className="p-0 m-0 border border-white">
                                    <Link to={'/GFPS-Committee'} className='text-decoration-none'>
                                        <li className='p-3 border-b-2 hover:bg-haze hover:cursor-pointer'>
                                            GFPS Committee
                                        </li>
                                    </Link>
                                    <Link to={'/About-Page'} className='text-decoration-none'>
                                        <li className='p-3 border-b-2 hover:bg-haze hover:cursor-pointer'>
                                            About us
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header